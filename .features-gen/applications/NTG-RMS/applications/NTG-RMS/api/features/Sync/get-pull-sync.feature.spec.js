/** Generated from: applications\NTG-RMS\api\features\Sync\get-pull-sync.feature */
import { test } from "playwright-bdd";

test.describe("Pull latest changes from server", () => {

  test("GET Pull latest changes from server returns successful response", { tag: ["@getPullSync"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getPullSync\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Sync\\get-pull-sync.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Pull latest changes from server returns successful response": {"pickleLocation":"6:3","tags":["@getPullSync"]},
};