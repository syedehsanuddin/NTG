/** Generated from: applications\NTG-RMS\api\features\Reports\get-tax-report.feature */
import { test } from "playwright-bdd";

test.describe("Get tax report (13.6)", () => {

  test("GET Get tax report (13.6) returns successful response", { tag: ["@getTaxReport"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTaxReport\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Reports\\get-tax-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get tax report (13.6) returns successful response": {"pickleLocation":"6:3","tags":["@getTaxReport"]},
};