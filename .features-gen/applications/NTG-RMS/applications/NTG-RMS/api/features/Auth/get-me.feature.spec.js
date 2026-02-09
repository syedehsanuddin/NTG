/** Generated from: applications\NTG-RMS\api\features\Auth\get-me.feature */
import { test } from "playwright-bdd";

test.describe("Get current user profile", () => {

  test("GET Get current user profile returns successful response with required fields", { tag: ["@AuthgetMe"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMe\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"id\"");
    await And("the response should have field \"email\"");
    await And("the response should have field \"name\"");
    await And("the response should have field \"role\"");
    await And("the response should have field \"roles\"");
  });

  test("GET Get current user profile returns valid data types", { tag: ["@AuthgetMe"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMe\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"id\" of type \"string\"");
    await And("the response should have field \"email\" of type \"string\"");
    await And("the response should have field \"name\" of type \"string\"");
    await And("the response should have field \"role\" of type \"string\"");
    await And("the response should have field \"roles\" of type \"array\"");
  });

  test("GET Get current user profile returns valid roles array structure", { tag: ["@AuthgetMe"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMe\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"roles\"");
    await And("the response field \"roles\" should be an array");
    await And("the response field \"roles\" array should contain at least 1 item");
    await And("all items in the response field \"roles\" should have required fields: \"id, name\"");
  });

  test("GET Get current user profile returns valid email format", { tag: ["@AuthgetMe"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMe\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"email\"");
    await And("the response should have field \"email\" of type \"string\"");
  });

  test("GET Get current user profile returns correct content type", { tag: ["@AuthgetMe"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMe\"", null, { request });
    await Then("the response status should be 200");
    await And("the response content type should be \"application/json\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Auth\\get-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get current user profile returns successful response with required fields": {"pickleLocation":"6:3","tags":["@AuthgetMe"]},
  "GET Get current user profile returns valid data types": {"pickleLocation":"15:3","tags":["@AuthgetMe"]},
  "GET Get current user profile returns valid roles array structure": {"pickleLocation":"24:3","tags":["@AuthgetMe"]},
  "GET Get current user profile returns valid email format": {"pickleLocation":"32:3","tags":["@AuthgetMe"]},
  "GET Get current user profile returns correct content type": {"pickleLocation":"38:3","tags":["@AuthgetMe"]},
};