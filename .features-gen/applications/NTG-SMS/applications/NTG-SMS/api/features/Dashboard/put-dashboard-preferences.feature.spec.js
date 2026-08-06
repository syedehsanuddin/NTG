/** Generated from: applications\NTG-SMS\api\features\Dashboard\put-dashboard-preferences.feature */
import { test } from "playwright-bdd";

test.describe("Put Preference Dashboard", () => {

  test("PUT Put Preference Dashboard returns successful response", { tag: ["@putPreferenceDashboard"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putPreferenceDashboard\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Dashboard\\put-dashboard-preferences.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Preference Dashboard returns successful response": {"pickleLocation":"6:3","tags":["@putPreferenceDashboard"]},
};