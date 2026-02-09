/** Generated from: applications\NTG-RMS\api\features\Delivery\get-delivery-orders.feature */
import { test } from "playwright-bdd";

test.describe("Get delivery orders", () => {

  test("GET Get delivery orders returns successful response", { tag: ["@getDeliveryOrders"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getDeliveryOrders\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Delivery\\get-delivery-orders.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get delivery orders returns successful response": {"pickleLocation":"6:3","tags":["@getDeliveryOrders"]},
};