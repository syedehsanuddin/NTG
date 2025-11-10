/** Generated from: applications\ntg-ticket\api\features\Tickets\patchUpdateStatus.feature */
import { test } from "playwright-bdd";

test.describe("Update Ticket Status API Validation", () => {

  test("PATCH Ticket status to OPEN after creation", { tag: ["@patchUpdateStatus", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Status Update\",\n  \"description\": \"<p>This ticket is created for automated status update testing and will be removed afterwards.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
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
  "PATCH Ticket status to OPEN after creation": {"pickleLocation":"5:3","tags":["@patchUpdateStatus","@happyflow"]},
};