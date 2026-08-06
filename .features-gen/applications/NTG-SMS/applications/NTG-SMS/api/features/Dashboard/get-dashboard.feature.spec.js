/** Generated from: applications\NTG-SMS\api\features\Dashboard\get-dashboard.feature */
import { test } from "playwright-bdd";

test.describe("Get Dashboard", () => {

  test("GET Get Dashboard returns successful response", { tag: ["@getDashboard"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getDashboard\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Dashboard\\get-dashboard.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Dashboard returns successful response": {"pickleLocation":"6:3","tags":["@getDashboard"]},
};