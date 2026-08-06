/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-switch-child.feature */
import { test } from "playwright-bdd";

test.describe("Post Switch Child Auth", () => {

  test("POST Post Switch Child Auth returns successful response", { tag: ["@postSwitchChildAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSwitchChildAuth\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-switch-child.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Switch Child Auth returns successful response": {"pickleLocation":"6:3","tags":["@postSwitchChildAuth"]},
};