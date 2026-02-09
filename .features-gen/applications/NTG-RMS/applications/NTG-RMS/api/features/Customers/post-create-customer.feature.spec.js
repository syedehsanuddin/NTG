/** Generated from: applications\NTG-RMS\api\features\Customers\post-create-customer.feature */
import { test } from "playwright-bdd";

test.describe("Create a new customer", () => {

  test("POST Create a new customer returns successful response", { tag: ["@postCreateCustomerExplicit", "@ahsan133"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateCustomer\" with payload '{\"name\":\"Test User Automated\",\"phone\":\"{GENERATE_PHONE}\",\"email\":\"{GENERATE_CUSTOMER_EMAIL}\",\"dateOfBirth\":\"2025-12-31\",\"preferredLanguage\":\"en\",\"notes\":\"Test User\",\"address\":{\"label\":\"home\",\"address\":\"H1338 P6 Bahria Town\",\"city\":\"Karachi\",\"country\":\"Pakistan\"}}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Customers\\post-create-customer.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new customer returns successful response": {"pickleLocation":"6:3","tags":["@postCreateCustomerExplicit","@ahsan133"]},
};