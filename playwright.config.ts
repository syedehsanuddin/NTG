import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
    steps: ["applications/ntg-ticket/api/step-definitions/**/*.ts"],
    paths: ["applications/ntg-ticket/api/features/**/*.feature"],
});

export default defineConfig({
    // Ensure specs are (re)generated before every run, even with `npx playwright test`
    globalSetup: require.resolve("./global-setup"),
    testDir,
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : 1,
    reporter: [["html"], ["list"]],
    use: {
        trace: "on-first-retry",
        baseURL: "http://localhost:4000",
    },
    projects: [
        {
            name: "api-tests",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});

