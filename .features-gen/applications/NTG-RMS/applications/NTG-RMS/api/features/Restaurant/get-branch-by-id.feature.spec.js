/** Generated from: applications\NTG-RMS\api\features\Restaurant\get-branch-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get a single branch by ID", () => {

  test("GET Get a single branch by ID returns successful response", { tag: ["@getBranchById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getBranchById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\get-branch-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get a single branch by ID returns successful response": {"pickleLocation":"6:3","tags":["@getBranchById"]},
};