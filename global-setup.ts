import { execSync } from "child_process";

async function globalSetup() {
    try {
        // Regenerate BDD specs before tests start
        execSync("npx playwright-bdd generate", { stdio: "inherit" });
    } catch (err) {
        // Fail fast if generation fails
        throw err;
    }
}

export default globalSetup;


