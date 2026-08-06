/** Generated from: applications\NTG-SMS\api\features\Dashboard\get-dashboard-widgets.feature */
import { test } from "playwright-bdd";

test.describe("Get Widget Dashboard", () => {

  test("GET Get Widget Dashboard returns successful response", { tag: ["@getWidgetDashboard"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getWidgetDashboard\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Dashboard\\get-dashboard-widgets.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Widget Dashboard returns successful response": {"pickleLocation":"6:3","tags":["@getWidgetDashboard"]},
};