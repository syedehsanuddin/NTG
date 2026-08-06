/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniforms.feature */
import { test } from "playwright-bdd";

test.describe("Get Uniforms", () => {

  test("GET Get Uniforms returns successful response", { tag: ["@getUniforms"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUniforms\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniforms.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Uniforms returns successful response": {"pickleLocation":"6:3","tags":["@getUniforms"]},
};