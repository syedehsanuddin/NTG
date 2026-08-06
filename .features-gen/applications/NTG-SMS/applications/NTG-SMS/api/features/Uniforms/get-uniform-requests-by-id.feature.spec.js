/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniform-requests-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Uniform Request By Id", () => {

  test("POST Create a new uniformrequest returns successful response", { tag: ["@getUniformRequestById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUniformRequest\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as uniformrequest id");
  });

  test("GET Get Uniform Request By Id returns successful response", { tag: ["@getUniformRequestById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUniformRequestById\" with id \"{STORED_UNIFORMREQUEST_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniform-requests-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new uniformrequest returns successful response": {"pickleLocation":"6:3","tags":["@getUniformRequestById"]},
  "GET Get Uniform Request By Id returns successful response": {"pickleLocation":"11:3","tags":["@getUniformRequestById"]},
};