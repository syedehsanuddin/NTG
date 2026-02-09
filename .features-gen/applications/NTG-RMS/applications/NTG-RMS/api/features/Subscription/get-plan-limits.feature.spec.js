/** Generated from: applications\NTG-RMS\api\features\Subscription\get-plan-limits.feature */
import { test } from "playwright-bdd";

test.describe("Get plan limits for a specific plan", () => {

  test("GET Get plan limits for a specific plan returns successful response", { tag: ["@getPlanLimits"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getPlanLimits\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Subscription\\get-plan-limits.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get plan limits for a specific plan returns successful response": {"pickleLocation":"6:3","tags":["@getPlanLimits"]},
};