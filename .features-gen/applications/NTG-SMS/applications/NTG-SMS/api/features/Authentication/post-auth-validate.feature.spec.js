/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-validate.feature */
import { test } from "playwright-bdd";

test.describe("Post Validate Auth", () => {

  test("POST Post Validate Auth returns successful response", { tag: ["@postValidateAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postValidateAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-validate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Validate Auth returns successful response": {"pickleLocation":"6:3","tags":["@postValidateAuth"]},
};