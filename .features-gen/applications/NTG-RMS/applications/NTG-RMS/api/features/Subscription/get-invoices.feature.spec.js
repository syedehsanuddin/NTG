/** Generated from: applications\NTG-RMS\api\features\Subscription\get-invoices.feature */
import { test } from "playwright-bdd";

test.describe("Get billing history (invoices)", () => {

  test("GET Get billing history (invoices) returns successful response", { tag: ["@getInvoices"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getInvoices\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\get-invoices.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get billing history (invoices) returns successful response": {"pickleLocation":"6:3","tags":["@getInvoices"]},
};