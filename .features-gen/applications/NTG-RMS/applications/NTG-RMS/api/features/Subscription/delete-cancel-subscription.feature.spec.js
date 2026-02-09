/** Generated from: applications\NTG-RMS\api\features\Subscription\delete-cancel-subscription.feature */
import { test } from "playwright-bdd";

test.describe("Cancel subscription", () => {

  test("DELETE Cancel subscription returns successful response", { tag: ["@deleteCancelSubscription"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteCancelSubscription\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\delete-cancel-subscription.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Cancel subscription returns successful response": {"pickleLocation":"6:3","tags":["@deleteCancelSubscription"]},
};