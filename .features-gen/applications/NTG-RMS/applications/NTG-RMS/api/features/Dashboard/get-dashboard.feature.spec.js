/** Generated from: applications\NTG-RMS\api\features\Dashboard\get-dashboard.feature */
import { test } from "playwright-bdd";

test.describe("Get dashboard data", () => {

  test("GET Get dashboard data returns successful response", { tag: ["@getDashboard"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getDashboard\" with headers \"branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Dashboard\\get-dashboard.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get dashboard data returns successful response": {"pickleLocation":"6:3","tags":["@getDashboard"]},
};