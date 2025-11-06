/** Generated from: applications\ntg-ticket\api\features\Tickets\getTicketById.feature */
import { test } from "playwright-bdd";

test.describe("Get Ticket By ID API Validation", () => {

  test("GET Ticket by ID returns ticket data, then 404 after deletion", { tag: ["@getTicketById"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"63b9e3d4-85a5-4029-a458-2209cf4476a1\",\n  \"subcategory\": \"dfa5af36-b4a1-4657-8076-5df793828222\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"urgency\": \"LOW\",\n  \"slaLevel\": \"STANDARD\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the user hits get endpoint with the recently created ticket", null, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"title\" equal to \"NTA - Automated Test Ticket - No Action Required\"");
    await When("the user deletes the recently created ticket", null, { request });
    await Then("the response status should be 200");
    await And("the user hits get endpoint with the recently created ticket", null, { request });
    await Then("the response status should be 404");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getTicketById.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Ticket by ID returns ticket data, then 404 after deletion": {"pickleLocation":"6:3","tags":["@getTicketById"]},
};