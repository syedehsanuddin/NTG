/** Generated from: applications\NTG-RMS\api\features\Subscription\put-downgrade-plan.feature */
import { test } from "playwright-bdd";

test.describe("Downgrade subscription plan", () => {

  test("PUT Downgrade subscription plan returns successful response", { tag: ["@putDowngradePlan"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putDowngradePlan\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\put-downgrade-plan.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Downgrade subscription plan returns successful response": {"pickleLocation":"6:3","tags":["@putDowngradePlan"]},
};