/** Generated from: applications\NTG-RMS\api\features\Subscription\get-subscription.feature */
import { test } from "playwright-bdd";

test.describe("Get current subscription", () => {

  test("GET Get current subscription returns successful response", { tag: ["@getSubscription"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSubscription\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\get-subscription.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get current subscription returns successful response": {"pickleLocation":"6:3","tags":["@getSubscription"]},
};