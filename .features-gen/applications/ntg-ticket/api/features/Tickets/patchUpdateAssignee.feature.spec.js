/** Generated from: applications\ntg-ticket\api\features\Tickets\patchUpdateAssignee.feature */
import { test } from "playwright-bdd";

test.describe("Update Ticket Assignee API Validation", () => {

  test("PATCH Ticket assignee after creation", { tag: ["@patchUpdateAssignee", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Assignee Update\",\n  \"description\": \"<p>This ticket is created for automated assignee update testing and will be removed afterwards.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user updates the recently created ticket assignee:", {"docString":{"content":"{\n  \"assignedToId\": \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"\n}"}}, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"assignedToId\" equal to \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\patchUpdateAssignee.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Ticket assignee after creation": {"pickleLocation":"5:3","tags":["@patchUpdateAssignee","@happyflow"]},
};