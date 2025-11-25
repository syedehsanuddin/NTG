import { Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

export async function loginAsUser(
    page: Page,
    email?: string,
    password?: string
) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
        email || process.env.NTG_AUTH_EMAIL || "ahmed@company.com",
        password || process.env.NTG_AUTH_PASSWORD || "user123"
    );
    await loginPage.isLoggedIn();
}

export async function waitForApiResponse(page: Page, urlPattern: string) {
    await page.waitForResponse(response => 
        response.url().includes(urlPattern) && response.status() === 200
    );
}

export async function waitForNavigation(page: Page, urlPattern: string | RegExp) {
    await page.waitForURL(urlPattern);
}

export function generateTestTicketTitle(): string {
    const timestamp = Date.now();
    return `NTA - Automated Test Ticket - UI - ${timestamp}`;
}

export function generateTestComment(): string {
    const timestamp = Date.now();
    return `This is an automated test comment - ${timestamp}`;
}

