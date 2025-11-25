import { Locator, Page, expect } from "@playwright/test";

export class TicketDetailPage {
    readonly page: Page;
    readonly ticketTitle: Locator;
    readonly ticketDescription: Locator;
    readonly statusBadge: Locator;
    readonly priorityBadge: Locator;
    readonly updateStatusButton: Locator;
    readonly assignButton: Locator;
    readonly commentInput: Locator;
    readonly commentSubmitButton: Locator;
    readonly internalCommentCheckbox: Locator;
    readonly commentsList: Locator;
    readonly editCommentButton: Locator;
    readonly deleteCommentButton: Locator;
    readonly internalCommentIndicator: Locator;

    constructor(page: Page) {
        this.page = page;
        // Update these selectors based on your actual UI
        // Use XPath for ticket title as provided by user
        this.ticketTitle = page.locator('xpath=/html/body/main/div/main/div/div[1]/div[1]/div/h1');
        this.ticketDescription = page.locator('[data-testid="ticket-description"], .ticket-description');
        this.statusBadge = page.locator('[data-testid="status-badge"], .status-badge, .badge');
        this.priorityBadge = page.locator('[data-testid="priority-badge"], .priority-badge');
        this.updateStatusButton = page.locator('button:has-text("Update Status"), button:has-text("Change Status")');
        this.assignButton = page.locator('button:has-text("Assign"), button:has-text("Assign To")');
        this.commentInput = page.locator('textarea[name="comment"], textarea[placeholder*="comment"], #comment');
        this.commentSubmitButton = page.locator('button:has-text("Add Comment"), button:has-text("Post Comment"), button[type="submit"]');
        this.internalCommentCheckbox = page.locator('input[type="checkbox"][name="isInternal"], input[type="checkbox"]#isInternal');
        this.commentsList = page.locator('[data-testid="comments-list"], .comments-list, .comment-item');
        this.editCommentButton = page.locator('button:has-text("Edit"), [data-testid="edit-comment"]');
        this.deleteCommentButton = page.locator('button:has-text("Delete"), [data-testid="delete-comment"]');
        this.internalCommentIndicator = page.locator('.internal-comment, [data-testid="internal-comment"]');
    }

    async goto(ticketId?: string) {
        if (ticketId) {
            await this.page.goto(`/tickets/${ticketId}`);
        } else {
            await this.page.goto('/tickets');
        }
    }

    async getTicketTitle(): Promise<string> {
        return await this.ticketTitle.textContent() || '';
    }

    async getTicketStatus(): Promise<string> {
        return await this.statusBadge.textContent() || '';
    }

    async updateStatus(newStatus: string) {
        await this.updateStatusButton.click();
        // Wait for status dropdown/modal to appear
        await this.page.waitForTimeout(500);
        await this.page.locator(`option:has-text("${newStatus}"), button:has-text("${newStatus}")`).click();
        await this.page.waitForLoadState('networkidle');
    }

    async assignTo(userId: string) {
        await this.assignButton.click();
        await this.page.waitForTimeout(500);
        await this.page.locator(`option[value="${userId}"], [data-user-id="${userId}"]`).click();
        await this.page.waitForLoadState('networkidle');
    }

    async addComment(content: string, isInternal: boolean = false) {
        await this.commentInput.fill(content);
        if (isInternal) {
            await this.internalCommentCheckbox.check();
        }
        await this.commentSubmitButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async editComment(oldContent: string, newContent: string) {
        const commentItem = this.page.locator(`.comment-item:has-text("${oldContent}")`);
        await commentItem.locator('button:has-text("Edit")').click();
        await this.commentInput.fill(newContent);
        await this.commentSubmitButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async deleteComment(content: string) {
        const commentItem = this.page.locator(`.comment-item:has-text("${content}")`);
        await commentItem.locator('button:has-text("Delete")').click();
        // Confirm deletion if there's a confirmation dialog
        await this.page.waitForLoadState('networkidle');
    }

    commentText(content: string): Locator {
        return this.page.locator(`text=${content}`);
    }

    async verifyCommentExists(content: string) {
        await expect(this.commentText(content)).toBeVisible();
    }

    async getCommentsCount(): Promise<number> {
        return await this.commentsList.count();
    }

    /**
     * Verifies that the ticket title contains "Ticket"
     * Waits for the title element to be visible first
     */
    async verifyTicketTitleContainsTicket(timeout: number = 20000) {
        // Wait for the ticket title to be visible (navigation to detail page)
        await this.ticketTitle.waitFor({ state: 'visible', timeout });
        
        // Get the title text and verify it contains "Ticket"
        const titleText = await this.ticketTitle.textContent();
        expect(titleText).toContain('Ticket');
    }
}

