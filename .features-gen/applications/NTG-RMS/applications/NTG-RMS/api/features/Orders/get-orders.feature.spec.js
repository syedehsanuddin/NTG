/** Generated from: applications\NTG-RMS\api\features\Orders\get-orders.feature */
import { test } from "playwright-bdd";

test.describe("Get all orders with filters", () => {

  test("GET Get all orders with filters returns successful response", { tag: ["@getOrders"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOrders\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\get-orders.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all orders with filters returns successful response": {"pickleLocation":"6:3","tags":["@getOrders"]},
};