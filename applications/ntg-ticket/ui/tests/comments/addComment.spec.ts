import { expect, test } from "@playwright/test";
import { TicketDetailPage } from "../../pages/ticketDetailPage";
import { TicketListPage } from "../../pages/ticketListPage";
import { generateTestComment, loginAsUser } from "../../utils/testHelpers";

test.describe("Add Comment to Ticket", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsUser(page);
    });

    test("should add a comment to a ticket", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        const ticketDetailPage = new TicketDetailPage(page);
        const commentText = generateTestComment();

        // Navigate to a ticket
        await ticketListPage.goto();
        await ticketListPage.clickFirstTicket();

        // Add comment
        await ticketDetailPage.addComment(commentText, false);

        // Verify comment appears
        await ticketDetailPage.verifyCommentExists(commentText);
    });

    test("should add an internal comment", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        const ticketDetailPage = new TicketDetailPage(page);
        const commentText = generateTestComment();

        await ticketListPage.goto();
        await ticketListPage.clickFirstTicket();

        // Add internal comment
        await ticketDetailPage.addComment(commentText, true);

        // Verify comment exists and is marked as internal
        await ticketDetailPage.verifyCommentExists(commentText);
        // Uncomment if you have an internal comment indicator
        // await expect(ticketDetailPage.internalCommentIndicator).toBeVisible();
    });

    test("should display multiple comments", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        const ticketDetailPage = new TicketDetailPage(page);

        await ticketListPage.goto();
        await ticketListPage.clickFirstTicket();

        // Get initial comment count
        const initialCount = await ticketDetailPage.getCommentsCount();

        // Add first comment
        await ticketDetailPage.addComment(generateTestComment(), false);
        
        // Add second comment
        await ticketDetailPage.addComment(generateTestComment(), false);

        // Verify comment count increased
        const finalCount = await ticketDetailPage.getCommentsCount();
        expect(finalCount).toBeGreaterThan(initialCount);
    });
});

