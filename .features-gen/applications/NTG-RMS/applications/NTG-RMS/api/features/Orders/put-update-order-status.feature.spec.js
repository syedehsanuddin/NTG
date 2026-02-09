/** Generated from: applications\NTG-RMS\api\features\Orders\put-update-order-status.feature */
import { test } from "playwright-bdd";

test.describe("Update order status", () => {

  test("PUT Update order status returns successful response", { tag: ["@putUpdateOrderStatus"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateOrderStatus\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\put-update-order-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update order status returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateOrderStatus"]},
};