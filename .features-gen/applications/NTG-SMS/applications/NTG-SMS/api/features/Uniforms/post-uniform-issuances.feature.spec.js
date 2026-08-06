/** Generated from: applications\NTG-SMS\api\features\Uniforms\post-uniform-issuances.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Uniform Issuance", () => {

  test("POST Post Create Uniform Issuance returns successful response", { tag: ["@postCreateUniformIssuance"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateUniformIssuance\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\post-uniform-issuances.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Uniform Issuance returns successful response": {"pickleLocation":"6:3","tags":["@postCreateUniformIssuance"]},
};