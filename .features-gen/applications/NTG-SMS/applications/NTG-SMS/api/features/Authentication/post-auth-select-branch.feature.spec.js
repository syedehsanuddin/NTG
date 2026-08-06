/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-select-branch.feature */
import { test } from "playwright-bdd";

test.describe("Post Select Branch Auth", () => {

  test("POST Post Select Branch Auth returns successful response", { tag: ["@postSelectBranchAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSelectBranchAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-select-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Select Branch Auth returns successful response": {"pickleLocation":"6:3","tags":["@postSelectBranchAuth"]},
};