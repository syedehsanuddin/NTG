/** Generated from: applications\NTG-RMS\api\features\Orders\put-update-payment-status.feature */
import { test } from "playwright-bdd";

test.describe("Update order payment status", () => {

  test("PUT Update order payment status returns successful response", { tag: ["@putUpdatePaymentStatus"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdatePaymentStatus\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\put-update-payment-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update order payment status returns successful response": {"pickleLocation":"6:3","tags":["@putUpdatePaymentStatus"]},
};