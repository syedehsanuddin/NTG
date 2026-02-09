/** Generated from: applications\NTG-RMS\api\features\Inventory\get-stock-movement-report.feature */
import { test } from "playwright-bdd";

test.describe("Get stock movement report", () => {

  test("GET Get stock movement report returns successful response", { tag: ["@getStockMovementReport"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getStockMovementReport\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\get-stock-movement-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get stock movement report returns successful response": {"pickleLocation":"6:3","tags":["@getStockMovementReport"]},
};