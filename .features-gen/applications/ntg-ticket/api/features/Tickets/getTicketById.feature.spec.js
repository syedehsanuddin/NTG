/** Generated from: applications\ntg-ticket\api\features\Tickets\getTicketById.feature */
import { test } from "playwright-bdd";

test.describe("Get Ticket By ID API Validation", () => {

  test("GET Ticket by ID returns ticket data, then 404 after deletion", { tag: ["@getTicketById", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("user creates a ticket with followin payload:", {"docString":{"content":"{\n  \"title\": \"NTA - Automated Test Ticket - No Action Required\",\n  \"description\": \"<p>This is an aumtated test ticket for test cycle purpose and will deleted automaticlaly.</p>\",\n  \"category\": \"ba47e8b4-f669-4535-b3ef-3478f1d844e2\",\n  \"subcategory\": \"bc999191-e258-4b39-b41d-9019460f79c3\",\n  \"priority\": \"LOW\",\n  \"impact\": \"MINOR\",\n  \"customFields\": {}\n}"}}, { request });
    await Then("the response status should be 201");
    await And("the user hits get endpoint with the recently created ticket", null, { request });
    await Then("the response status should be 200");
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
  "GET Ticket by ID returns ticket data, then 404 after deletion": {"pickleLocation":"6:3","tags":["@getTicketById","@regression"]},
};