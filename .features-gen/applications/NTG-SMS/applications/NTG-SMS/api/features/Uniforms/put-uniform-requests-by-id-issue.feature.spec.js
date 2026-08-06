/** Generated from: applications\NTG-SMS\api\features\Uniforms\put-uniform-requests-by-id-issue.feature */
import { test } from "playwright-bdd";

test.describe("Put Issue Uniform Request", () => {

  test("PUT Put Issue Uniform Request returns successful response", { tag: ["@putIssueUniformRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putIssueUniformRequest\" with id \"{STORED_ISSUE_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\put-uniform-requests-by-id-issue.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Issue Uniform Request returns successful response": {"pickleLocation":"6:3","tags":["@putIssueUniformRequest"]},
};