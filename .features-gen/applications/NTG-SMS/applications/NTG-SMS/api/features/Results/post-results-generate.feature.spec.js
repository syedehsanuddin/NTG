/** Generated from: applications\NTG-SMS\api\features\Results\post-results-generate.feature */
import { test } from "playwright-bdd";

test.describe("Post Generate Result", () => {

  test("POST Post Generate Result returns successful response", { tag: ["@postGenerateResult"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postGenerateResult\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\post-results-generate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Generate Result returns successful response": {"pickleLocation":"6:3","tags":["@postGenerateResult"]},
};