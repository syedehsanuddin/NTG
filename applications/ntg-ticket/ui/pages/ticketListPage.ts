import { Locator, Page, expect } from "@playwright/test";

export class TicketListPage {
    readonly page: Page;
    readonly createTicketButton: Locator;
    readonly ticketRows: Locator;
    readonly searchInput: Locator;
    readonly filterDropdown: Locator;
    readonly statusFilter: Locator;
    readonly priorityFilter: Locator;

    constructor(page: Page) {
        this.page = page;
        // Update these selectors based on your actual UI
        this.createTicketButton = page.locator('button:has-text("Create Ticket"), a:has-text("Create Ticket"), button:has-text("New Ticket")');
        this.ticketRows = page.locator('table tbody tr, [data-testid="ticket-row"], .ticket-row');
        this.searchInput = page.locator('input[placeholder*="Search"], input[name="search"], #search');
        this.filterDropdown = page.locator('select[name="status"], select[name="filter"]');
        this.statusFilter = page.locator('select[name="status"], [data-testid="status-filter"]');
        this.priorityFilter = page.locator('select[name="priority"], [data-testid="priority-filter"]');
    }

    async goto() {
        await this.page.goto('/tickets');
    }

    async clickCreateTicket() {
        await this.createTicketButton.click();
    }

    async searchTicket(searchTerm: string) {
        await this.searchInput.fill(searchTerm);
        await this.page.keyboard.press('Enter');
        // Wait for search results
        await this.page.waitForLoadState('networkidle');
    }

    async filterByStatus(status: string) {
        await this.statusFilter.selectOption(status);
        await this.page.waitForLoadState('networkidle');
    }

    async filterByPriority(priority: string) {
        await this.priorityFilter.selectOption(priority);
        await this.page.waitForLoadState('networkidle');
    }

    async getTicketCount(): Promise<number> {
        return await this.ticketRows.count();
    }

    async clickTicketByTitle(title: string) {
        await this.page.locator(`tr:has-text("${title}"), [data-testid="ticket-row"]:has-text("${title}")`).first().click();
    }

    async clickFirstTicket() {
        await this.ticketRows.first().click();
    }

    async verifyTicketExists(title: string) {
        await expect(this.page.locator(`text=${title}`).first()).toBeVisible();
    }

    getTicketByIndex(index: number): Locator {
        return this.ticketRows.nth(index);
    }
}

