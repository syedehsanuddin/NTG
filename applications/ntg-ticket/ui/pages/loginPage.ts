import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly forgotPasswordLink: Locator;
    readonly roleModal: Locator;
    readonly endUserRoleOption: Locator;
    readonly roleConfirmButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Update these selectors based on your actual UI
        this.emailInput = page.locator('input[name="email"], input[type="email"], input[placeholder*="email" i], input[placeholder*="Email" i], #email');
        this.nextButton = page.locator('button:has-text("Next"), button:has-text("NEXT"), button[type="button"]:has-text("Next")');
        this.passwordInput = page.locator('input[name="password"], input[type="password"], #password');
        this.signInButton = page.locator('//form//button//span//span');
        this.loginButton = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In")');
        this.errorMessage = page.locator('.error-message, .alert-error, [role="alert"]');
        this.forgotPasswordLink = page.locator('a:has-text("Forgot Password"), a:has-text("Forgot password")');
        // Role selection modal
        this.roleModal = page.locator('(//section//div/div/div[2])[1]');
        this.endUserRoleOption = page.locator('//div[p[contains(text(),"End User")]]');
        // this.roleConfirmButton = page.locator('button:has-text("Confirm"), button:has-text("Continue"), button:has-text("Select"), button[type="submit"]');
    }

    async goto() {
        await this.page.goto('/login');
        await this.dismissCookieBanner();
    }

    async login(email: string, password: string) {
        // Step 1: Enter email - ensure input is ready and clear first
        await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.emailInput.click(); // Focus the input
        await this.emailInput.clear(); // Clear any existing value
        await this.emailInput.fill(email);
        // Verify email was entered
        const emailValue = await this.emailInput.inputValue();
        if (!emailValue || emailValue !== email) {
            throw new Error(`Failed to enter email. Expected: ${email}, Got: ${emailValue}`);
        }
        
        // Step 2: Click Next button
        // await this.nextButton.waitFor({ state: 'visible', timeout: 10000 });
        // await this.nextButton.click();
        
        // Step 3: Enter password - wait for password field to appear
        await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
        await this.passwordInput.click(); // Focus the input
        await this.passwordInput.clear(); // Clear any existing value
        await this.passwordInput.fill(password);
        
        // Step 4: Click Sign In button
        // await this.signInButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.signInButton.click();
        
        // // Step 5: Select role (End User) in modal - clicking directly redirects to dashboard
        // await this.roleModal.waitFor({ state: 'visible', timeout: 10000 });
        // await this.endUserRoleOption.waitFor({ state: 'visible', timeout: 10000 });
        // await this.endUserRoleOption.click();
        
        // Wait for navigation to dashboard after clicking End User
        await this.page.waitForURL(/.*dashboard|.*home|.*tickets/, { timeout: 10000 });
        // await this.page.waitForLoadState('networkidle');
    }

    async isLoggedIn() {
        // Wait for navigation away from login page
        // await expect(this.page).not.toHaveURL(/.*login/);
        // Verify we're on dashboard or tickets page
        const currentUrl = this.page.url();
        await expect(currentUrl).toMatch(/.*dashboard|.*home|.*tickets/);
    }

    async verifyErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
    }

    private async dismissCookieBanner() {
        const acceptButton = this.page.locator('button:has-text("Accept All")');
        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        }
    }
}

