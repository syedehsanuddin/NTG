/** Generated from: applications\NTG-SMS\api\features\Uniforms\post-uniform-requests.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Uniform Request", () => {

  test("POST Post Create Uniform Request returns successful response", { tag: ["@postCreateUniformRequest"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateUniformRequest\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\post-uniform-requests.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Uniform Request returns successful response": {"pickleLocation":"6:3","tags":["@postCreateUniformRequest"]},
};