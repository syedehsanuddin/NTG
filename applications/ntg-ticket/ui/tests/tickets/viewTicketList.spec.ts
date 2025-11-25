import { expect, test } from "@playwright/test";
import { TicketListPage } from "../../pages/ticketListPage";
import { loginAsUser } from "../../utils/testHelpers";

test.describe("View Ticket List", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsUser(page);
    });

    test("should display ticket list", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        
        await ticketListPage.goto();
        
        // Verify page loaded
        await expect(page).toHaveURL(/.*tickets/);
        await expect(ticketListPage.createTicketButton).toBeVisible();
        
        // Verify tickets are displayed
        const ticketCount = await ticketListPage.getTicketCount();
        expect(ticketCount).toBeGreaterThan(0);
    });

    test("should search tickets", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        
        await ticketListPage.goto();
        
        // Search for a ticket
        await ticketListPage.searchTicket("email server");
        
        // Verify search results are displayed
        await expect(ticketListPage.ticketRows.first()).toBeVisible({ timeout: 5000 });
    });

    test("should filter tickets by status", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        
        await ticketListPage.goto();
        
        // Filter by OPEN status
        await ticketListPage.filterByStatus("OPEN");
        
        // Verify filter applied (check URL or visible tickets)
        await expect(page).toHaveURL(/.*status=OPEN|OPEN/);
    });

    test("should filter tickets by priority", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        
        await ticketListPage.goto();
        
        // Filter by HIGH priority
        await ticketListPage.filterByPriority("HIGH");
        
        // Verify filter applied
        await expect(page).toHaveURL(/.*priority=HIGH|HIGH/);
    });

    test("should navigate to ticket details", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        
        await ticketListPage.goto();
        
        // Click on first ticket
        await ticketListPage.clickFirstTicket();
        
        // Verify navigated to detail page
        await expect(page).toHaveURL(/.*tickets\/[a-f0-9-]+/);
    });
});

