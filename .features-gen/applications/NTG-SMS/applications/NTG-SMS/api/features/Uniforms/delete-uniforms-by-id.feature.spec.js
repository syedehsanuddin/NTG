/** Generated from: applications\NTG-SMS\api\features\Uniforms\delete-uniforms-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Uniform", () => {

  test("POST Create a new uniform returns successful response", { tag: ["@deleteUniform"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUniform\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as uniform id");
  });

  test("DELETE Delete Uniform returns successful response", { tag: ["@deleteUniform"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteUniform\" with id \"{STORED_UNIFORM_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\delete-uniforms-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new uniform returns successful response": {"pickleLocation":"6:3","tags":["@deleteUniform"]},
  "DELETE Delete Uniform returns successful response": {"pickleLocation":"11:3","tags":["@deleteUniform"]},
};