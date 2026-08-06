/** Generated from: applications\NTG-SMS\api\features\Uniforms\get-uniform-requests.feature */
import { test } from "playwright-bdd";

test.describe("Get Uniform Requests", () => {

  test("GET Get Uniform Requests returns successful response", { tag: ["@getUniformRequests"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUniformRequests\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Uniforms\\get-uniform-requests.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Uniform Requests returns successful response": {"pickleLocation":"6:3","tags":["@getUniformRequests"]},
};