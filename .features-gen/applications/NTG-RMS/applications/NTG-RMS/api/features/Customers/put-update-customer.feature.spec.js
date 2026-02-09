/** Generated from: applications\NTG-RMS\api\features\Customers\put-update-customer.feature */
import { test } from "playwright-bdd";

test.describe("Update a customer", () => {

  test("POST Create a new customer returns successful response", { tag: ["@putUpdateCustomer"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCustomer\" with payload '{\"name\":\"Test User Automated\",\"phone\":\"{GENERATE_PHONE}\",\"email\":\"{GENERATE_CUSTOMER_EMAIL}\",\"dateOfBirth\":\"2025-12-31\",\"preferredLanguage\":\"en\",\"notes\":\"Test User\",\"address\":{\"label\":\"home\",\"address\":\"H1338 P6 Bahria Town\",\"city\":\"Karachi\",\"country\":\"Pakistan\"}}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as customer id");
  });

  test("PUT Update a customer returns successful response", { tag: ["@putUpdateCustomer"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateCustomer\" with id \"{STORED_CUSTOMER_ID}\" and payload '{\"name\":\"Test User Automated Updated\" ,\"notes\":\"Test User Automated Updated\"}' and headers \"language=en\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Customers\\put-update-customer.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new customer returns successful response": {"pickleLocation":"7:5","tags":["@putUpdateCustomer"]},
  "PUT Update a customer returns successful response": {"pickleLocation":"12:3","tags":["@putUpdateCustomer"]},
};