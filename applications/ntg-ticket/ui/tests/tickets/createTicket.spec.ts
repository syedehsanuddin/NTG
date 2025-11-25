import { test } from "@playwright/test";
import { CreateTicketPage } from "../../pages/createTicketPage";
import { TicketDetailPage } from "../../pages/ticketDetailPage";
import { TicketListPage } from "../../pages/ticketListPage";
import { generateTestTicketTitle, loginAsUser } from "../../utils/testHelpers";

test.describe("Create Ticket", () => {
    test.beforeEach(async ({ page }) => {
        await loginAsUser(page);
    });

    test("should create a ticket successfully", async ({ page }) => {
        const ticketListPage = new TicketListPage(page);
        const createTicketPage = new CreateTicketPage(page);
        const ticketDetailPage = new TicketDetailPage(page);
        const ticketTitle = generateTestTicketTitle();

        // Navigate to create ticket page
        await ticketListPage.goto();
        await ticketListPage.clickCreateTicket();

        // Fill ticket form (dropdowns will auto-select first available option)
        await createTicketPage.fillTicketForm({
            title: ticketTitle,
            description: "<p>This is an automated test ticket created via UI.</p>",
            category: "HARDWARE",
            subcategory: "desktop",
            priority: "LOW",
            impact: "MINOR",
            urgency: "LOW"
        });

        // Submit the form
        await createTicketPage.submit();

        // Wait for navigation to ticket detail page (up to 20 seconds)
        // The redirect takes time, so we wait for the URL to change to ticket detail page
        await page.waitForURL(/.*\/tickets\/.*/, { timeout: 20000 });
        
        // Verify the ticket title contains "Ticket"
        await ticketDetailPage.verifyTicketTitleContainsTicket(20000);
    });

//     test("should validate required fields", async ({ page }) => {
//         const ticketListPage = new TicketListPage(page);
//         const createTicketPage = new CreateTicketPage(page);

//         await ticketListPage.goto();
//         await ticketListPage.clickCreateTicket();

//         // Try to submit without filling required fields
//         await createTicketPage.submit();

//         // Verify validation errors (HTML5 validation or custom validation)
//         const titleInput = createTicketPage.titleInput;
//         const descriptionInput = createTicketPage.descriptionInput;

//         // Check if HTML5 validation is triggered
//         const titleValidity = await titleInput.evaluate((el: HTMLInputElement) => el.validity.valid);
//         const descValidity = await descriptionInput.evaluate((el: HTMLTextAreaElement) => el.validity.valid);

//         // If HTML5 validation doesn't work, check for error messages
//         if (titleValidity || descValidity) {
//             await createTicketPage.verifyValidationError();
//         } else {
//             expect(titleValidity).toBe(false);
//             expect(descValidity).toBe(false);
//         }
//     });

//     test("should cancel ticket creation", async ({ page }) => {
//         const ticketListPage = new TicketListPage(page);
//         const createTicketPage = new CreateTicketPage(page);

//         await ticketListPage.goto();
//         await ticketListPage.clickCreateTicket();

//         // Fill some data
//         await createTicketPage.titleInput.fill("Test Ticket");
        
//         // Cancel
//         await createTicketPage.cancel();

//         // Verify redirected back to list or previous page
//         await expect(page).toHaveURL(/.*tickets/);
//     });

//     test("should create ticket with different priority values", async ({ page }) => {
//         const ticketListPage = new TicketListPage(page);
//         const createTicketPage = new CreateTicketPage(page);
//         const ticketTitle = generateTestTicketTitle();

//         await ticketListPage.goto();
//         await ticketListPage.clickCreateTicket();

//         await createTicketPage.fillTicketForm({
//             title: ticketTitle,
//             description: "<p>Test ticket with MEDIUM priority</p>",
//             category: "63b9e3d4-85a5-4029-a458-2209cf4476a1",
//             subcategory: "dfa5af36-b4a1-4657-8076-5df793828222",
//             priority: "MEDIUM",
//             impact: "MAJOR",
//             urgency: "HIGH",
//             slaLevel: "STANDARD"
//         });

//         await createTicketPage.submit();
//         await createTicketPage.verifySuccess();
//     });
});
