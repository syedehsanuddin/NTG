/** Generated from: applications\NTG-SMS\api\features\Dashboard\get-dashboard-preferences.feature */
import { test } from "playwright-bdd";

test.describe("Get Preference Dashboard", () => {

  test("GET Get Preference Dashboard returns successful response", { tag: ["@getPreferenceDashboard"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPreferenceDashboard\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Dashboard\\get-dashboard-preferences.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Preference Dashboard returns successful response": {"pickleLocation":"6:3","tags":["@getPreferenceDashboard"]},
};