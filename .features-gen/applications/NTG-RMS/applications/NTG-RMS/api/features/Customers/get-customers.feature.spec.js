/** Generated from: applications\NTG-RMS\api\features\Customers\get-customers.feature */
import { test } from "playwright-bdd";

test.describe("Get all customers", () => {

  test("GET Get all customers returns successful response", async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getCustomers\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Customers\\get-customers.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all customers returns successful response": {"pickleLocation":"6:3"},
};