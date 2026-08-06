import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

// BDD config for API tests - NTG Ticket
const ntgTicketApiTestDir = defineBddConfig({
    steps: ["applications/ntg-ticket/api/step-definitions/**/*.ts"],
    paths: ["applications/ntg-ticket/api/features/**/*.feature"],
    outputDir: ".features-gen/applications/ntg-ticket",
});

// BDD config for API tests - NTG RMS
const ntgRmsApiTestDir = defineBddConfig({
    steps: ["applications/NTG-RMS/api/step-definitions/**/*.ts"],
    paths: ["applications/NTG-RMS/api/features/**/*.feature"],
    outputDir: ".features-gen/applications/NTG-RMS",
});

// BDD config for API tests - NTG SMS
const ntgSmsApiTestDir = defineBddConfig({
    steps: ["applications/NTG-SMS/api/step-definitions/**/*.ts"],
    paths: ["applications/NTG-SMS/api/features/**/*.feature"],
    outputDir: ".features-gen/applications/NTG-SMS",
});

export default defineConfig({
    // Ensure specs are (re)generated before every run, even with `npx playwright test`
    globalSetup: require.resolve("./global-setup"),
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : 1,
    reporter: [["html"], ["list"]],
    use: {
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
    },
    projects: [
        // API tests - NTG Ticket (BDD)
        {
            name: "api-tests",
            testDir: ntgTicketApiTestDir,
            testMatch: /.*\.spec\.(js|ts)/,
            timeout: 60000, // 1 minute timeout for API tests
            use: { 
                ...devices["Desktop Chrome"],
                baseURL: "http://192.168.50.50:4000",
            },
        },
        // API tests - NTG RMS (BDD)
        {
            name: "api-tests-rms",
            testDir: ntgRmsApiTestDir,
            testMatch: /.*\.spec\.(js|ts)/,
            timeout: 60000, // 1 minute timeout for API tests
            use: { 
                ...devices["Desktop Chrome"],
                baseURL: "http://192.168.50.50:8001",
            },
        },
        // API tests - NTG SMS (BDD)
        {
            name: "api-tests-sms",
            testDir: ntgSmsApiTestDir,
            testMatch: /.*\.spec\.(js|ts)/,
            timeout: 60000,
            use: {
                ...devices["Desktop Chrome"],
                baseURL: "https://alma.ntgapps.com",
            },
        },
        // UI tests (Standard Playwright)
        {
            name: "ui-tests",
            testDir: "./applications/ntg-ticket/ui/tests",
            testMatch: /.*\.spec\.ts/,
            timeout: 60000, // Increase test timeout to 60 seconds to accommodate navigation delays
            use: {
                ...devices["Desktop Chrome"],
                baseURL: "http://192.168.50.50:8080",
                viewport: { width: 1920, height: 1080 },
                // Increase action timeout for slow operations
                actionTimeout: 30000, // 30 seconds for actions like clicks, fills
            },
        },
    ],
});

