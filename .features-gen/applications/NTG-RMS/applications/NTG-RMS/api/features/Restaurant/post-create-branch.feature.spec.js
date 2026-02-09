/** Generated from: applications\NTG-RMS\api\features\Restaurant\post-create-branch.feature */
import { test } from "playwright-bdd";

test.describe("Create a new branch", () => {

  test("POST Create a new branch returns successful response", { tag: ["@postCreateBranch"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateBranch\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\post-create-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new branch returns successful response": {"pickleLocation":"6:3","tags":["@postCreateBranch"]},
};