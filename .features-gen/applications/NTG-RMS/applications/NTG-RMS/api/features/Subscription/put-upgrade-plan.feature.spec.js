/** Generated from: applications\NTG-RMS\api\features\Subscription\put-upgrade-plan.feature */
import { test } from "playwright-bdd";

test.describe("Upgrade subscription plan", () => {

  test("PUT Upgrade subscription plan returns successful response", { tag: ["@putUpgradePlan"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpgradePlan\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\put-upgrade-plan.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Upgrade subscription plan returns successful response": {"pickleLocation":"6:3","tags":["@putUpgradePlan"]},
};