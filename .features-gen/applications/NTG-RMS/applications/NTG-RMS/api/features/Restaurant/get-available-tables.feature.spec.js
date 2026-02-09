/** Generated from: applications\NTG-RMS\api\features\Restaurant\get-available-tables.feature */
import { test } from "playwright-bdd";

test.describe("Get available tables (tables without active orders) for dine-in", () => {

  test("GET Get available tables (tables without active orders) for dine-in returns successful response", { tag: ["@getAvailableTables"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAvailableTables\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\get-available-tables.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get available tables (tables without active orders) for dine-in returns successful response": {"pickleLocation":"6:3","tags":["@getAvailableTables"]},
};