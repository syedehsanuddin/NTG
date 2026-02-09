/** Generated from: applications\NTG-RMS\api\features\Auth\get-profile.feature */
import { test } from "playwright-bdd";

test.describe("Get current user profile", () => {

  test("GET Get current user profile returns successful response with required fields", { tag: ["@getProfile", "@ahsanme11"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getProfile\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"id\"");
    await And("the response should have field \"email\"");
    await And("the response should have field \"name\"");
    await And("the response should have field \"role\"");
    await And("the response should have field \"phone\"");
    await And("the response should have field \"tenantId\"");
    await And("the response should have field \"createdAt\"");
    await And("the response should have field \"updatedAt\"");
  });

  test("GET Get current user profile returns valid data types", { tag: ["@getProfile", "@ahsanme11"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getProfile\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"id\" of type \"string\"");
    await And("the response should have field \"email\" of type \"string\"");
    await And("the response should have field \"name\" of type \"string\"");
    await And("the response should have field \"role\" of type \"string\"");
    await And("the response should have field \"phone\" of type \"string\"");
    await And("the response should have field \"tenantId\" of type \"string\"");
    await And("the response should have field \"createdAt\" of type \"string\"");
    await And("the response should have field \"updatedAt\" of type \"string\"");
  });

  test("GET Get current user profile returns valid timestamp fields", { tag: ["@getProfile", "@ahsanme11"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getProfile\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"createdAt\"");
    await And("the response should have field \"updatedAt\"");
    await And("the response field \"createdAt\" should be a valid ISO date string");
    await And("the response field \"updatedAt\" should be a valid ISO date string");
  });

  test("GET Get current user profile returns correct content type", { tag: ["@getProfile", "@ahsanme11"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getProfile\"", null, { request });
    await Then("the response status should be 200");
    await And("the response content type should be \"application/json\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Auth\\get-profile.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get current user profile returns successful response with required fields": {"pickleLocation":"6:3","tags":["@getProfile","@ahsanme11"]},
  "GET Get current user profile returns valid data types": {"pickleLocation":"18:3","tags":["@getProfile","@ahsanme11"]},
  "GET Get current user profile returns valid timestamp fields": {"pickleLocation":"30:3","tags":["@getProfile","@ahsanme11"]},
  "GET Get current user profile returns correct content type": {"pickleLocation":"38:3","tags":["@getProfile","@ahsanme11"]},
};