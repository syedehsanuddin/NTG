/** Generated from: applications\NTG-RMS\api\features\Orders\get-order-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get order by ID with full details", () => {

  test("GET Get order by ID with full details returns successful response", { tag: ["@getOrderById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getOrderById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\get-order-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get order by ID with full details returns successful response": {"pickleLocation":"6:3","tags":["@getOrderById"]},
};