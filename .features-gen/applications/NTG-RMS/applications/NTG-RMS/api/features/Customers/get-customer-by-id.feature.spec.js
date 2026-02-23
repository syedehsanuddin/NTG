/** Generated from: applications\NTG-RMS\api\features\Customers\get-customer-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get customer by ID with order history", () => {

  test("POST Create a new customer returns successful response", { tag: ["@getCustomerById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCustomer\" with payload '{\"name\":\"Test User Automated\",\"phone\":\"{GENERATE_PHONE}\",\"email\":\"{GENERATE_CUSTOMER_EMAIL}\",\"dateOfBirth\":\"2025-12-31\",\"preferredLanguage\":\"en\",\"notes\":\"Test User\",\"address\":{\"label\":\"home\",\"address\":\"H1338 P6 Bahria Town\",\"city\":\"Karachi\",\"country\":\"Pakistan\"}}' and headers 'branchId={BRANCH_ID}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as customer id");
  });

  test("GET Get customer by ID with order history returns successful response", { tag: ["@getCustomerById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getCustomerById\" with id \"{STORED_CUSTOMER_ID}\" and headers \"language=en\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"id\"");
    await And("the response should have field \"email\"");
    await And("the response should have field \"name\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Customers\\get-customer-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new customer returns successful response": {"pickleLocation":"8:3","tags":["@getCustomerById"]},
  "GET Get customer by ID with order history returns successful response": {"pickleLocation":"13:3","tags":["@getCustomerById"]},
};