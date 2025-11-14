/** Generated from: applications\ntg-ticket\api\features\Tickets\getOverdueTickets.feature */
import { test } from "playwright-bdd";

test.describe("Get Overdue Tickets API Validation", () => {

  test("GET Overdue Tickets returns successful response with default parameters", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority, dueDate, status\"");
  });

  test("GET Overdue Tickets with page and limit returns paged results", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\" with headers \"page=1;limit=20\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, priority, dueDate\"");
  });

  test("GET Overdue Tickets with priority filter returns matching tickets", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\" with headers \"priority%5B%5D=CRITICAL&page=1&limit=10\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("all items should have field \"priority\" equal to \"CRITICAL\"");
    await And("all items should have field \"dueDate\"");
  });

  test("GET Overdue Tickets with search parameter returns matching tickets", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\" with headers \"search=email server\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

  test("GET Overdue Tickets with date range returns tickets in date range", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\" with headers \"dateFrom=2024-01-01T00:00:00.000Z;dateTo=2024-12-31T23:59:59.999Z\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, title, createdAt, dueDate\"");
  });

  test("GET Overdue Tickets returns tickets with dueDate field", { tag: ["@getOverdueTickets", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOverdueTickets\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items should have field \"dueDate\"");
    await And("all items should have field \"dueDate\" of type \"string\"");
    await And("all items should have field \"status\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getOverdueTickets.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Overdue Tickets returns successful response with default parameters": {"pickleLocation":"6:3","tags":["@getOverdueTickets","@regression"]},
  "GET Overdue Tickets with page and limit returns paged results": {"pickleLocation":"13:3","tags":["@getOverdueTickets","@regression"]},
  "GET Overdue Tickets with priority filter returns matching tickets": {"pickleLocation":"20:3","tags":["@getOverdueTickets","@regression"]},
  "GET Overdue Tickets with search parameter returns matching tickets": {"pickleLocation":"27:3","tags":["@getOverdueTickets","@regression"]},
  "GET Overdue Tickets with date range returns tickets in date range": {"pickleLocation":"33:3","tags":["@getOverdueTickets","@regression"]},
  "GET Overdue Tickets returns tickets with dueDate field": {"pickleLocation":"40:3","tags":["@getOverdueTickets","@regression"]},
};