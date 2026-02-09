/** Generated from: applications\NTG-RMS\api\features\Orders\put-update-order-item-status.feature */
import { test } from "playwright-bdd";

test.describe("Update individual order item status (kitchen display only)", () => {

  test("PUT Update individual order item status (kitchen display only) returns successful response", { tag: ["@putUpdateOrderItemStatus"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateOrderItemStatus\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\put-update-order-item-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update individual order item status (kitchen display only) returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateOrderItemStatus"]},
};