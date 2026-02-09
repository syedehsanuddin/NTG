/** Generated from: applications\NTG-RMS\api\features\Reports\get-inventory-report.feature */
import { test } from "playwright-bdd";

test.describe("Get inventory report (13.4)", () => {

  test("GET Get inventory report (13.4) returns successful response", { tag: ["@getInventoryReport"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getInventoryReport\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Reports\\get-inventory-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get inventory report (13.4) returns successful response": {"pickleLocation":"6:3","tags":["@getInventoryReport"]},
};