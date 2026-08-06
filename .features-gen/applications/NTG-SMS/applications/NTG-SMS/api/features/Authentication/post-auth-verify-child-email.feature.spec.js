/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-verify-child-email.feature */
import { test } from "playwright-bdd";

test.describe("Post Verify Child Email Auth", () => {

  test("POST Post Verify Child Email Auth returns successful response", { tag: ["@postVerifyChildEmailAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postVerifyChildEmailAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-verify-child-email.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Verify Child Email Auth returns successful response": {"pickleLocation":"6:3","tags":["@postVerifyChildEmailAuth"]},
};