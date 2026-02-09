/** Generated from: applications\NTG-RMS\api\features\Orders\get-stream-kitchen-orders.feature */
import { test } from "playwright-bdd";

test.describe("Server-Sent Events stream for kitchen display order updates", () => {

  test("GET Server-Sent Events stream for kitchen display order updates returns successful response", { tag: ["@getStreamKitchenOrders"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getStreamKitchenOrders\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\get-stream-kitchen-orders.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Server-Sent Events stream for kitchen display order updates returns successful response": {"pickleLocation":"6:3","tags":["@getStreamKitchenOrders"]},
};