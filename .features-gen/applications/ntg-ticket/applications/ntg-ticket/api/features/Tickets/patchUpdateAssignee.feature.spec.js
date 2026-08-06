/** Generated from: applications\ntg-ticket\api\features\Tickets\patchUpdateAssignee.feature */
import { test } from "playwright-bdd";

test.describe("Update Ticket Assignee API Validation", () => {

  test("PATCH Ticket assignee after creation", async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Assignee Update\",\n  \"description\": \"<p>This ticket is created for automated assignee update testing and will be removed afterwards.</p>\",\n  \"category\": \"fb1ef4eb-1c99-4fe3-9dce-398ca993e763\",\n  \"subcategory\": \"bff9c5d7-ad4b-46be-81c4-7103ee2b5825\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user updates the recently created ticket assignee:", {"docString":{"content":"{\n  \"assignedToId\": \"d70694fb-e760-4166-b99c-a5c67473117e\"\n}"}}, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"assignedToId\" equal to \"d70694fb-e760-4166-b99c-a5c67473117e\"");
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
  "PATCH Ticket assignee after creation": {"pickleLocation":"5:3"},
};