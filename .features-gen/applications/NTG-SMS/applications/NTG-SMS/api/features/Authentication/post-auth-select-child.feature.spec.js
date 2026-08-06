/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-select-child.feature */
import { test } from "playwright-bdd";

test.describe("Post Select Child Auth", () => {

  test("POST Post Select Child Auth returns successful response", { tag: ["@postSelectChildAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSelectChildAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-select-child.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Select Child Auth returns successful response": {"pickleLocation":"6:3","tags":["@postSelectChildAuth"]},
};