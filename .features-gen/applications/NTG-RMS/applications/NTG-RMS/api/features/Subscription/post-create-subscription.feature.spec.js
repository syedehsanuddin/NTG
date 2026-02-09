/** Generated from: applications\NTG-RMS\api\features\Subscription\post-create-subscription.feature */
import { test } from "playwright-bdd";

test.describe("Create subscription (trial)", () => {

  test("POST Create subscription (trial) returns successful response", { tag: ["@postCreateSubscription"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubscription\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\post-create-subscription.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create subscription (trial) returns successful response": {"pickleLocation":"6:3","tags":["@postCreateSubscription"]},
};