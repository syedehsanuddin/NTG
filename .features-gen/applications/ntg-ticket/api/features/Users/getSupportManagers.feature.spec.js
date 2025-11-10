/** Generated from: applications\ntg-ticket\api\features\Users\getSupportManagers.feature */
import { test } from "playwright-bdd";

test.describe("Support Managers API Validation", () => {

  test("GET Support Managers returns successful response with required fields", { tag: ["@getSupportManagers", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSupportManagers\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
    await And("all items in the response should have required fields: \"id, email, name\"");
    await And("all items should have field \"id\" of type \"string\"");
    await And("all items should have field \"email\" of type \"string\"");
    await And("all items should have field \"name\" of type \"string\"");
  });

  test("GET Support Managers response has valid data structure", { tag: ["@getSupportManagers", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSupportManagers\"", null, { request });
    await Then("the response status should be 200");
    await And("the response content type should be \"application/json\"");
    await And("the response should be an array");
    await And("each item in the array should have field \"id\"");
    await And("each item in the array should have field \"email\"");
    await And("each item in the array should have field \"name\"");
  });

  test("GET Support Managers response fields have non-empty values", { tag: ["@getSupportManagers", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSupportManagers\"", null, { request });
    await Then("the response status should be 200");
    await And("all items should have non-empty field \"id\"");
    await And("all items should have non-empty field \"email\"");
    await And("all items should have non-empty field \"name\"");
  });

  test("GET Support Managers response has valid email format", { tag: ["@getSupportManagers", "@happyflow"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSupportManagers\"", null, { request });
    await Then("the response status should be 200");
    await And("all items should have valid email format in field \"email\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Users\\getSupportManagers.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Support Managers returns successful response with required fields": {"pickleLocation":"5:3","tags":["@getSupportManagers","@happyflow"]},
  "GET Support Managers response has valid data structure": {"pickleLocation":"15:3","tags":["@getSupportManagers","@happyflow"]},
  "GET Support Managers response fields have non-empty values": {"pickleLocation":"24:3","tags":["@getSupportManagers","@happyflow"]},
  "GET Support Managers response has valid email format": {"pickleLocation":"31:3","tags":["@getSupportManagers","@happyflow"]},
};