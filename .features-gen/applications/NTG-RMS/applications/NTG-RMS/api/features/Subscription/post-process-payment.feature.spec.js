/** Generated from: applications\NTG-RMS\api\features\Subscription\post-process-payment.feature */
import { test } from "playwright-bdd";

test.describe("Process payment (dummy payment system)", () => {

  test("POST Process payment (dummy payment system) returns successful response", { tag: ["@postProcessPayment"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postProcessPayment\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\post-process-payment.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Process payment (dummy payment system) returns successful response": {"pickleLocation":"6:3","tags":["@postProcessPayment"]},
};