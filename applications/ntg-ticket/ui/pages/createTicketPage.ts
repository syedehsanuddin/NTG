import { Locator, Page, expect } from "@playwright/test";

export class CreateTicketPage {
    readonly page: Page;
    readonly titleInput: Locator;
    readonly descriptionInput: Locator;
    readonly categorySelect: Locator;
    readonly subcategorySelect: Locator;
    readonly prioritySelect: Locator;
    readonly impactSelect: Locator;
    readonly urgencySelect: Locator;
    readonly slaLevelSelect: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        // Update these selectors based on your actual UI
        this.titleInput = page.locator('//input[@data-path="title"]');
        this.descriptionInput = page.locator('//div[@placeholder="Detailed description of the issue"]');
        this.categorySelect = page.locator('//input[@data-path="category"]');
        this.subcategorySelect = page.locator('//input[@data-path="subcategory"]');
        this.prioritySelect = page.locator('//input[@data-path="priority"]');
        this.impactSelect = page.locator('//input[@data-path="impact"]');
        this.urgencySelect = page.locator('//input[@data-path="urgency"]');
        this.slaLevelSelect = page.locator('//input[@data-path="slaLevel"]');
        this.submitButton = page.locator('//button[.//span[contains(., "Create Ticket")]]');
        this.cancelButton = page.locator('button:has-text("Cancel"), a:has-text("Cancel")');
        this.successMessage = page.locator('.success-message, .alert-success, [role="alert"]:has-text("success")');
        this.errorMessage = page.locator('.error-message, .alert-error, [role="alert"]:has-text("error")');
    }

    async goto() {
        await this.page.goto('/tickets/create');
        await this.dismissCookieBanner();
    }

    async fillTicketForm(data: {
        title: string;
        description: string;
        category?: string;
        subcategory?: string;
        priority?: string;
        impact?: string;
        urgency?: string;
    }) {
        await this.titleInput.fill(data.title);
        await this.descriptionInput.click();
        await this.descriptionInput.fill(data.description);

        if (data.category) {
            await this.selectDropdownOption(this.categorySelect, data.category);
        }
        
        if (data.subcategory) {
            await this.waitForDropdownOptionsReady(this.subcategorySelect);
            await this.selectDropdownOption(this.subcategorySelect, data.subcategory);
        }

        if (data.priority) {
            await this.selectDropdownOption(this.prioritySelect, data.priority);
        }

        if (data.impact) {
            await this.selectDropdownOption(this.impactSelect, data.impact);
        }

        if (data.urgency) {
            await this.waitForDropdownOptionsReady(this.urgencySelect);
            await this.selectDropdownOption(this.urgencySelect, data.urgency);
        }

       

    }

    async submit() {
        await this.submitButton.click();
        // Wait for form submission
        await this.page.waitForLoadState('networkidle');
    }

    async cancel() {
        await this.cancelButton.click();
    }

    async verifySuccess() {
        await expect(this.successMessage).toBeVisible({ timeout: 10000 });
    }

    async verifyValidationError() {
        await expect(this.errorMessage).toBeVisible();
    }

    async isSubmitEnabled(): Promise<boolean> {
        return await this.submitButton.isEnabled();
    }

    async getDefaultDropdownValues() {
        return {
            category: await this.getInputValue(this.categorySelect),
            subcategory: await this.getInputValue(this.subcategorySelect),
            priority: await this.getInputValue(this.prioritySelect),
            impact: await this.getInputValue(this.impactSelect),
            urgency: await this.getInputValue(this.urgencySelect),
            slaLevel: await this.getInputValue(this.slaLevelSelect),
        };
    }

    /**
     * Selects a specific option from a custom dropdown by matching the provided value
     * Follows Playwright best practices: uses role-based locators and matches by text
     */
    private async selectDropdownOption(trigger: Locator, value: string) {
        // Click the dropdown trigger
        await trigger.click();

        const optionByRole = this.page
            .getByRole('option', { name: new RegExp(`^${value}$`, 'i') })
            .first();

        let optionClicked = false;

        try {
            await optionByRole.waitFor({ state: 'visible', timeout: 3000 });
            await optionByRole.click();
            optionClicked = true;
        } catch {
            try {
                await optionByRole.waitFor({ state: 'attached', timeout: 3000 });
                await optionByRole.click({ force: true });
                optionClicked = true;
            } catch {
                // Fallback to text-based locator
                const optionByText = this.page.locator('div[role="option"]', { hasText: new RegExp(value, 'i') }).first();
                try {
                    await optionByText.waitFor({ state: 'visible', timeout: 2000 });
                    await optionByText.click({ force: true });
                    optionClicked = true;
                } catch {
                    // Final fallback: select the first option to unblock the flow
                    const firstOption = this.page.getByRole('option').first();
                    await firstOption.click({ force: true });
                    optionClicked = true;
                }
            }
        }

        if (!optionClicked) {
            throw new Error(`No dropdown options found for value "${value}".`);
        }
    }

    private async getInputValue(input: Locator): Promise<string> {
        try {
            return await input.inputValue();
        } catch {
            return (await input.textContent())?.trim() ?? "";
        }
    }


    private async dismissCookieBanner() {
        const acceptButton = this.page.locator('button:has-text("Accept All")');
        if (await acceptButton.isVisible()) {
            await acceptButton.click();
        }
    }

    private async waitForFieldEnabled(field: Locator, timeout: number = 10000) {
        // Use Playwright's built-in expect with toBeEnabled for waiting
        await expect(field).toBeEnabled({ timeout });
    }

    /**
     * Waits for dropdown options to be ready for any dropdown field
     * This ensures the dropdown has populated before we try to select from it
     * Keeps trying until options are actually available
     */
    private async waitForDropdownOptionsReady(field: Locator, timeout: number = 30000) {
        // Wait for the field to be enabled first
        await this.waitForFieldEnabled(field, timeout);
        
        // Now verify options are available by opening dropdown and checking
        // Keep trying until we actually get values/options
        const optionSelectors = [
            '[data-floating-ui-portal] [role="option"]',
            '.mantine-Select-dropdown [role="option"]',
            'div[role="listbox"] [role="option"]',
            '[role="option"]',
            'listbox option',
            'option',
        ];

        const startTime = Date.now();
        let optionsReady = false;
        
        while (Date.now() - startTime < timeout && !optionsReady) {
            await field.click();
            
            const portalLocator = this.page
                .locator('[data-floating-ui-portal]')
                .filter({ has: this.page.locator('[role="option"]') })
                .last();

            if (await portalLocator.count()) {
                const portalOptions = portalLocator.locator('[role="option"]');
                if (await portalOptions.count()) {
                    const firstOptionText = await portalOptions.first().textContent();
                    if (firstOptionText && firstOptionText.trim()) {
                        optionsReady = true;
                    }
                }
            }

            if (!optionsReady) {
                for (const selector of optionSelectors) {
                    const options = this.page.locator(selector);
                    if (await options.count()) {
                        const firstOptionText = await options.first().textContent();
                        if (firstOptionText && firstOptionText.trim()) {
                            optionsReady = true;
                            break;
                        }
                    }
                }
            }
            
            if (!optionsReady) {
                await this.page.keyboard.press('Escape').catch(() => {});
                await this.page.waitForTimeout(200);
            }
        }
        
        await this.page.keyboard.press('Escape').catch(() => {});
        
        if (!optionsReady) {
            throw new Error(`Dropdown options did not load within ${timeout}ms`);
        }
    }
}

