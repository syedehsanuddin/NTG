import devEnvironment from "../environments/dev-env";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const apiEndPoints = require("../repository/apiEndPoints.json");

let ntgSmsGenerated: { project: string; resources: ApiResource[] } | null = null;
try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    ntgSmsGenerated = require("../repository/ntgSmsEndpoints.generated.json");
} catch {
    ntgSmsGenerated = null;
}

interface ApiResource {
    name: string;
    path: string;
}

interface ApiApplication {
    project?: string;
    apiName: string;
    baseUrl?: string;
    apiVersion?: string;
    resources: ApiResource[];
}

function findResource(
    application: ApiApplication,
    endpointName: string,
    project?: string
): ApiResource | undefined {
    const fromJson = application.resources.find((r) => r.name === endpointName);
    if (fromJson) return fromJson;
    if (project === "ntg-sms" && ntgSmsGenerated?.resources) {
        return ntgSmsGenerated.resources.find((r) => r.name === endpointName);
    }
    return undefined;
}

export function getEndpointUrl(endpointName: string, params?: Record<string, string>, project?: string): string {
    const env = devEnvironment;
    const apiEndpoints = apiEndPoints as { applications: ApiApplication[] };

    // Find the endpoint across all applications
    for (const application of apiEndpoints.applications) {
        // Filter by project if specified
        if (project && application.project !== project) {
            continue;
        }

        const resource = findResource(application, endpointName, project);
        if (resource) {
            let url = resource.path;

            // Use project-specific apiVersion or fallback to env/application default
            const apiVersion = application.apiVersion || env.apiVersion || "v1";
            if (url.includes("{apiVersion}")) {
                url = url.replace("{apiVersion}", apiVersion);
            }

            // Replace any other path parameters
            if (params) {
                Object.keys(params).forEach((key) => {
                    url = url.replace(`{${key}}`, params[key]);
                });
            }

            // Use project-specific baseUrl or fallback to env baseUrl
            const baseUrl = application.baseUrl || env.baseUrl;
            const cleanBaseUrl = baseUrl?.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
            const path = url.startsWith("/") ? url : `/${url}`;
            const finalUrl = `${cleanBaseUrl}${path}`;
            return finalUrl;
        }
    }

    const projectMsg = project ? ` for project '${project}'` : "";
    throw new Error(`Endpoint '${endpointName}'${projectMsg} not found in apiEndPoints.json`);
}
