/** Generated from: applications\ntg-ticket\api\features\Comments\deleteComment.feature */
import { test } from "playwright-bdd";

test.describe("Delete Comment API Validation", () => {

  test("DELETE Comment after creation", { tag: ["@deleteComment", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Comment Deletion Flow\",\n  \"description\": \"<p>This ticket is created to test automated comment deletion and will be removed afterwards.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user adds a comment to the recently created ticket:", {"docString":{"content":"{\n  \"ticketId\": \"\",\n  \"content\": \"This is automated test comment\",\n  \"isInternal\": false\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user deletes the recently added comment", null, { request });
    await Then("the response status should be 200");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Comments\\deleteComment.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Comment after creation": {"pickleLocation":"5:3","tags":["@deleteComment","@happyflow","@regression"]},
};