/** Generated from: applications\NTG-RMS\api\features\Reports\get-sales-report.feature */
import { test } from "playwright-bdd";

test.describe("Get sales report (13.1)", () => {

  test("GET Get sales report (13.1) returns successful response", { tag: ["@getSalesReport"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSalesReport\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Reports\\get-sales-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get sales report (13.1) returns successful response": {"pickleLocation":"6:3","tags":["@getSalesReport"]},
};