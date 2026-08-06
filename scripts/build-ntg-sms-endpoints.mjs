/**
 * Builds ntgSmsEndpoints.generated.json from Alma OpenAPI + SMS feature files.
 * Feature files override / extend swagger-derived aliases (same names used in .feature steps).
 */
import fs from "fs";
import https from "https";
import path from "path";

const SWAGGER_URL = "https://alma.ntgapps.com/api/docs-json";
const FEATURES_ROOT = path.join(process.cwd(), "applications/NTG-SMS/api/features");
const OUT_FILE = path.join(process.cwd(), "common/repository/ntgSmsEndpoints.generated.json");

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { Accept: "application/json" } }, (res) => {
        if (res.statusCode && res.statusCode >= 400) reject(new Error(`HTTP ${res.statusCode}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(JSON.parse(Buffer.concat(chunks).toString("utf8"))));
      })
      .on("error", reject);
  });
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(p));
    else if (ent.name.endsWith(".feature")) out.push(p);
  }
  return out;
}

function pascalCase(s) {
  return String(s)
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

function singularize(word) {
  if (word.endsWith("ies")) return word.slice(0, -3) + "y";
  if (word.endsWith("s") && word.length > 3) return word.slice(0, -1);
  return word;
}

function meaningfulSegments(apiPath) {
  return apiPath.split("/").filter((p) => p && !["api", "v1", "v2", "v3"].includes(p));
}

function makeAlias(method, apiPath) {
  const parts = meaningfulSegments(apiPath);
  const dynamicParts = parts.filter((p) => p.startsWith("{") && p.endsWith("}"));
  const hasIdParam = dynamicParts.some((p) => p === "{id}");
  const staticParts = parts.filter((p) => !p.startsWith("{"));
  if (staticParts.length === 0) staticParts.push("resource");

  const nounRaw = staticParts[0];
  const noun = pascalCase(singularize(nounRaw));
  const tail = staticParts.slice(1).map((p) => pascalCase(singularize(p)));

  if (method === "get") {
    if (dynamicParts.length === 1 && dynamicParts[0] !== "{id}") {
      const inner = dynamicParts[0].slice(1, -1);
      return `get${pascalCase(nounRaw)}By${pascalCase(inner)}`;
    }
    if (hasIdParam && tail.length === 0) return `get${noun}ById`;
    if (hasIdParam && tail.length) return `get${tail.join("")}${noun}ById`;
    if (tail.length) return `get${tail.join("")}${noun}`;
    return `get${pascalCase(nounRaw)}`;
  }
  if (method === "post") {
    if (tail.length) return `post${tail.join("")}${noun}`;
    return `postCreate${noun}`;
  }
  if (method === "put") {
    if (tail.length) return `put${tail.join("")}${noun}`;
    return `putUpdate${noun}`;
  }
  if (method === "patch") {
    if (tail.length) return `patch${tail.join("")}${noun}`;
    return `patchUpdate${noun}`;
  }
  if (method === "delete") {
    if (tail.length) return `delete${tail.join("")}${noun}`;
    return `delete${noun}`;
  }
  return `${method}${pascalCase(apiPath)}`;
}

function toPathTemplate(apiPath) {
  return apiPath.replace(/^\/api\/v\d+\//, "/api/{apiVersion}/");
}

/** Single dynamic segment → {id} for step `params.id` substitution */
function normalizePathTemplate(pathTemplate) {
  const params = [...pathTemplate.matchAll(/\{([^}]+)\}/g)]
    .map((m) => m[1])
    .filter((x) => x !== "apiVersion");
  if (params.length === 1 && params[0] !== "id") {
    return pathTemplate.replace(`{${params[0]}}`, "{id}");
  }
  return pathTemplate;
}

function inferPostCollectionPath(validatePath) {
  const m = validatePath.match(/^(\/api\/v\d+)(\/.*)$/);
  if (!m) return null;
  const prefix = m[1];
  let rest = m[2];
  rest = rest.replace(/\/\{[^}]+\}\s*$/, "");
  if (rest.length < 2) return null;
  return prefix + rest;
}

/**
 * From one .feature file, map endpoint name -> path template /api/{apiVersion}/...
 */
function extractMapsFromFeature(content) {
  const vm = content.match(/Validate\s+(GET|POST|PUT|PATCH|DELETE)\s+(\/api\/v\d+\/[^\s]+)\s+endpoint/);
  if (!vm) return {};
  const validateMethod = vm[1].toLowerCase();
  const validatePath = vm[2];
  const pathTemplate = normalizePathTemplate(toPathTemplate(validatePath));

  const endpointNames = [...content.matchAll(/endpoint\s+"([^"]+)"/g)].map((x) => x[1]);
  const unique = [...new Set(endpointNames)];
  const out = {};

  for (const name of unique) {
    if (name.startsWith("postCreate") && validateMethod !== "post") {
      const postPath = inferPostCollectionPath(validatePath);
      if (postPath) {
        out[name] = normalizePathTemplate(toPathTemplate(postPath));
        continue;
      }
    }
    out[name] = pathTemplate;
  }
  return out;
}

async function main() {
  const spec = await fetchJson(SWAGGER_URL);
  const paths = spec.paths || {};
  const fromSwagger = new Map();

  for (const [p, methods] of Object.entries(paths)) {
    if (typeof methods !== "object") continue;
    for (const [method, op] of Object.entries(methods)) {
      const m = method.toLowerCase();
      if (!["get", "post", "put", "patch", "delete"].includes(m)) continue;
      if (!op || typeof op !== "object") continue;
      const pathTemplate = normalizePathTemplate(toPathTemplate(p));
      const name = makeAlias(m, p);
      fromSwagger.set(name, pathTemplate);
    }
  }

  const fromFeatures = new Map();
  for (const fp of walk(FEATURES_ROOT)) {
    const content = fs.readFileSync(fp, "utf8");
    const maps = extractMapsFromFeature(content);
    for (const [k, v] of Object.entries(maps)) {
      fromFeatures.set(k, v);
    }
  }

  const merged = new Map(fromSwagger);
  for (const [k, v] of fromFeatures) {
    merged.set(k, v);
  }

  const resources = [...merged.entries()]
    .map(([name, p]) => ({ name, path: p }))
    .sort((a, b) => a.name.localeCompare(b.name));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify({ project: "ntg-sms", resources }, null, 2), "utf8");
  console.log(`Wrote ${resources.length} resources (swagger ${fromSwagger.size}, feature overrides ${fromFeatures.size})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
