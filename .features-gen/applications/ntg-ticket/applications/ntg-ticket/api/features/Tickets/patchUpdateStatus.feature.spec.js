/** Generated from: applications\ntg-ticket\api\features\Tickets\patchUpdateStatus.feature */
import { test } from "playwright-bdd";

test.describe("Update Ticket Status API Validation", () => {

  test("PATCH Ticket status to OPEN after creation", async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Status Update\",\n  \"description\": \"<p>This ticket is created for automated status update testing and will be removed afterwards.</p>\",\n  \"category\": \"ba47e8b4-f669-4535-b3ef-3478f1d844e2\",\n  \"subcategory\": \"7f45e38b-459f-43e7-bc8d-05b5e4652981\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user updates the recently created ticket status:", {"docString":{"content":"{\n  \"status\": \"OPEN\"\n}"}}, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"status\" equal to \"OPEN\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\patchUpdateStatus.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Ticket status to OPEN after creation": {"pickleLocation":"5:3"},
};