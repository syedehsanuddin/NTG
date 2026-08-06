/** Generated from: applications\NTG-SMS\api\features\Authentication\post-auth-register.feature */
import { test } from "playwright-bdd";

test.describe("Post Register Auth", () => {

  test("POST Post Register Auth returns successful response", { tag: ["@postRegisterAuth"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postRegisterAuth\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\post-auth-register.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Register Auth returns successful response": {"pickleLocation":"6:3","tags":["@postRegisterAuth"]},
};