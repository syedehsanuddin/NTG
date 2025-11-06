/** Generated from: applications\ntg-ticket\api\features\Tickets\getMyTickets.feature */
import { test } from "playwright-bdd";

test.describe("Get My Tickets API Validation", () => {

  test("GET My Tickets returns successful response with default parameters", { tag: ["@getMyTickets"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMyTickets\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority\"");
  });

  test("GET My Tickets with page and limit returns paged results", { tag: ["@getMyTickets"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMyTickets\" with headers \"page=1;limit=20\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority\"");
  });

  test("GET My Tickets with priority filter returns matching tickets", { tag: ["@getMyTickets"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMyTickets\" with headers \"priority%5B%5D=MEDIUM&page=1&limit=10\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("all items should have field \"priority\" equal to \"MEDIUM\"");
  });

  test("GET My Tickets with search parameter returns matching tickets", { tag: ["@getMyTickets"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMyTickets\" with headers \"search=email+server&page=1&limit=10\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
  });

  test("GET My Tickets with date range returns tickets in date range", { tag: ["@getMyTickets"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMyTickets\" with headers \"dateFrom=2024-01-01T00:00:00.000Z;dateTo=2024-12-31T23:59:59.999Z\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, createdAt\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getMyTickets.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET My Tickets returns successful response with default parameters": {"pickleLocation":"6:3","tags":["@getMyTickets"]},
  "GET My Tickets with page and limit returns paged results": {"pickleLocation":"13:3","tags":["@getMyTickets"]},
  "GET My Tickets with priority filter returns matching tickets": {"pickleLocation":"20:3","tags":["@getMyTickets"]},
  "GET My Tickets with search parameter returns matching tickets": {"pickleLocation":"26:3","tags":["@getMyTickets"]},
  "GET My Tickets with date range returns tickets in date range": {"pickleLocation":"33:3","tags":["@getMyTickets"]},
};