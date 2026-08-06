/** Generated from: applications\ntg-ticket\api\features\Comments\postComment.feature */
import { test } from "playwright-bdd";

test.describe("Create Comment API Validation", () => {

  test("POST Comment for a newly created ticket returns successful response", { tag: ["@ahsan123"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Comment Flow\",\n  \"description\": \"<p>This ticket is created to test automated comment creation and will be removed afterwards.</p>\",\n  \"category\": \"ba47e8b4-f669-4535-b3ef-3478f1d844e2\",\n  \"subcategory\": \"bc999191-e258-4b39-b41d-9019460f79c3\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user adds a comment to the recently created ticket:", {"docString":{"content":"{\n  \"ticketId\": \"\",\n  \"content\": \"This is automated test comment\" \n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await And("the response data should have field \"content\" equal to \"This is automated test comment\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Comments\\postComment.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Comment for a newly created ticket returns successful response": {"pickleLocation":"5:3","tags":["@ahsan123"],"ownTags":["@ahsan123"]},
};