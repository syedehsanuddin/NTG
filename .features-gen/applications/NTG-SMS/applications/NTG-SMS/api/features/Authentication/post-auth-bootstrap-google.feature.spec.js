/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-bootstrap-google.feature */
import { test } from "playwright-bdd";

test.describe("Post Bootstrap Google Auth", () => {

  test("POST Post Bootstrap Google Auth returns successful response", { tag: ["@postBootstrapGoogleAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postBootstrapGoogleAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-bootstrap-google.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Bootstrap Google Auth returns successful response": {"pickleLocation":"6:3","tags":["@postBootstrapGoogleAuth"]},
};