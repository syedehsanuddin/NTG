/** Generated from: applications\ntg-ticket\api\features\Tickets\getTickets.feature */
import { test } from "playwright-bdd";

test.describe("Get Tickets API Validation", () => {

  test("GET Tickets returns successful response with default parameters", { tag: ["@getTickets", "@happyflow", "@regression", "@ahsan123456"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTickets\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority\"");
  });

  test("GET Tickets with page and limit returns paged results", { tag: ["@getTickets", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTickets\" with headers \"page=1;limit=20\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority\"");
  });

  test("GET Tickets with priority filter returns matching tickets", { tag: ["@getTickets", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTickets\" with headers \"priority%5B%5D=MEDIUM&page=1&limit=10\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("all items should have field \"priority\" equal to \"MEDIUM\"");
  });

  test("GET Tickets with search parameter returns matching tickets", { tag: ["@getTickets", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTickets\" with headers \"search=email server\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

  test("GET Tickets with date range returns tickets in date range", { tag: ["@getTickets", "@happyflow", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTickets\" with headers \"dateFrom=2024-01-01T00:00:00.000Z;dateTo=2024-12-31T23:59:59.999Z\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, createdAt\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getTickets.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Tickets returns successful response with default parameters": {"pickleLocation":"6:3","tags":["@getTickets","@happyflow","@regression","@ahsan123456"],"ownTags":["@ahsan123456"]},
  "GET Tickets with page and limit returns paged results": {"pickleLocation":"13:3","tags":["@getTickets","@happyflow","@regression"]},
  "GET Tickets with priority filter returns matching tickets": {"pickleLocation":"21:3","tags":["@getTickets","@happyflow","@regression"]},
  "GET Tickets with search parameter returns matching tickets": {"pickleLocation":"27:3","tags":["@getTickets","@happyflow","@regression"]},
  "GET Tickets with date range returns tickets in date range": {"pickleLocation":"33:3","tags":["@getTickets","@happyflow","@regression"]},
};