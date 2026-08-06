/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-google-signup.feature */
import { test } from "playwright-bdd";

test.describe("Post Google Signup Auth", () => {

  test("POST Post Google Signup Auth returns successful response", { tag: ["@postGoogleSignupAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postGoogleSignupAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-google-signup.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Google Signup Auth returns successful response": {"pickleLocation":"6:3","tags":["@postGoogleSignupAuth"]},
};