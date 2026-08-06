/** Generated from: applications\NTG-SMS\api\features\Uniforms\put-uniforms-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Uniform", () => {

  test("POST Create a new uniform returns successful response", { tag: ["@putUpdateUniform"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUniform\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as uniform id");
  });

  test("PUT Put Update Uniform returns successful response", { tag: ["@putUpdateUniform"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateUniform\" with id \"{STORED_UNIFORM_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\put-uniforms-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new uniform returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateUniform"]},
  "PUT Put Update Uniform returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateUniform"]},
};