/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniforms-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Uniform By Id", () => {

  test("POST Create a new uniform returns successful response", { tag: ["@getUniformById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUniform\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as uniform id");
  });

  test("GET Get Uniform By Id returns successful response", { tag: ["@getUniformById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUniformById\" with id \"{STORED_UNIFORM_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniforms-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new uniform returns successful response": {"pickleLocation":"6:3","tags":["@getUniformById"]},
  "GET Get Uniform By Id returns successful response": {"pickleLocation":"11:3","tags":["@getUniformById"]},
};