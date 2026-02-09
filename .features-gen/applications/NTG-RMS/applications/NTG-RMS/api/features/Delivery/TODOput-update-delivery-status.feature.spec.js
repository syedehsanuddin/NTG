/** Generated from: applications\NTG-RMS\api\features\Delivery\TODOput-update-delivery-status.feature */
import { test } from "playwright-bdd";

test.describe("Update delivery status", () => {

  test("PUT Update delivery status returns successful response", { tag: ["@putUpdateDeliveryStatus"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateDeliveryStatus\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Delivery\\TODOput-update-delivery-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update delivery status returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateDeliveryStatus"]},
};