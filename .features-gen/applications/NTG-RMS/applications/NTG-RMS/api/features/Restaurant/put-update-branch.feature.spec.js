/** Generated from: applications\NTG-RMS\api\features\Restaurant\put-update-branch.feature */
import { test } from "playwright-bdd";

test.describe("Update a branch", () => {

  test("PUT Update a branch returns successful response", { tag: ["@putUpdateBranch"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateBranch\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\put-update-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update a branch returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateBranch"]},
};