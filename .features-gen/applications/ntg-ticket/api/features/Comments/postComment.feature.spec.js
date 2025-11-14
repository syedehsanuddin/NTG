/** Generated from: applications\ntg-ticket\api\features\Comments\postComment.feature */
import { test } from "playwright-bdd";

test.describe("Create Comment API Validation", () => {

  test("POST Comment for a newly created ticket returns successful response", { tag: ["@postComment", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - Comment Flow\",\n  \"description\": \"<p>This ticket is created to test automated comment creation and will be removed afterwards.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the response data should have field \"id\"");
    await When("the user adds a comment to the recently created ticket:", {"docString":{"content":"{\n  \"ticketId\": \"\",\n  \"content\": \"This is automated test comment\",\n  \"isInternal\": false\n}"}}, { request });
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
  "POST Comment for a newly created ticket returns successful response": {"pickleLocation":"5:3","tags":["@postComment","@happyflow","@regression"]},
};