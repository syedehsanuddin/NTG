/** Generated from: applications\NTG-RMS\api\features\Restaurant\get-branches.feature */
import { test } from "playwright-bdd";

test.describe("Get all branches for the restaurant", () => {

  test("GET Get all branches for the restaurant returns successful response", { tag: ["@getBranches"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getBranches\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\get-branches.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all branches for the restaurant returns successful response": {"pickleLocation":"6:3","tags":["@getBranches"]},
};