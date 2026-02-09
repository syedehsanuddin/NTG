/** Generated from: applications\NTG-RMS\api\features\Customers\post-create-customer-address.feature */
import { test } from "playwright-bdd";

test.describe("Create a customer address", () => {

  test("POST Create a customer address returns successful response", { tag: ["@postCreateCustomerAddress"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCustomerAddress\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Customers\\post-create-customer-address.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a customer address returns successful response": {"pickleLocation":"6:3","tags":["@postCreateCustomerAddress"]},
};