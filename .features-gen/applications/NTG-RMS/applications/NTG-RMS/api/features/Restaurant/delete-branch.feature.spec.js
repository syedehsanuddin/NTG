/** Generated from: applications\NTG-RMS\api\features\Restaurant\delete-branch.feature */
import { test } from "playwright-bdd";

test.describe("Delete a branch (soft delete)", () => {

  test("DELETE Delete a branch (soft delete) returns successful response", { tag: ["@deleteBranch"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteBranch\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\delete-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a branch (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteBranch"]},
};