/** Generated from: applications\ntg-ticket\api\features\Users\getUserById.feature */
import { test } from "playwright-bdd";

test.describe("Get User By ID API Validation", () => {

  test("GET User by ID returns successful response with required fields", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response data should have field \"id\"");
    await And("the response data should have field \"email\"");
    await And("the response data should have field \"name\"");
    await And("the response data should have field \"roles\"");
    await And("the response data should have field \"isActive\"");
  });

  test("GET User by ID returns correct user data", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"", null, { request });
    await Then("the response status should be 200");
    await And("the response content type should be \"application/json\"");
    await And("the response data should have field \"id\" equal to \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"");
    await And("the response data should have field \"email\" equal to \"ahmed@company.com\"");
    await And("the response data should have field \"name\" equal to \"Ahmed Hassan al-Masri\"");
  });

  test("GET User by ID returns valid roles array", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"", null, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"roles\"");
    await And("the response data field \"roles\" should be an array");
    await And("the response data field \"roles\" should contain \"END_USER\"");
    await And("the response data field \"roles\" should contain \"SUPPORT_STAFF\"");
  });

  test("GET User by ID returns valid data types", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"", null, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"id\" of type \"string\"");
    await And("the response data should have field \"email\" of type \"string\"");
    await And("the response data should have field \"name\" of type \"string\"");
    await And("the response data should have field \"isActive\" of type \"boolean\"");
    await And("the response data should have field \"roles\" of type \"array\"");
  });

  test("GET User by ID returns valid timestamp fields", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"50711385-db9d-4f1f-a74e-680b7d2ba4db\"", null, { request });
    await Then("the response status should be 200");
    await And("the response data should have field \"createdAt\"");
    await And("the response data should have field \"updatedAt\"");
    await And("the response data field \"createdAt\" should be a valid ISO date string");
    await And("the response data field \"updatedAt\" should be a valid ISO date string");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Users\\getUserById.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET User by ID returns successful response with required fields": {"pickleLocation":"6:3","tags":["@getUserById"]},
  "GET User by ID returns correct user data": {"pickleLocation":"17:3","tags":["@getUserById"]},
  "GET User by ID returns valid roles array": {"pickleLocation":"25:3","tags":["@getUserById"]},
  "GET User by ID returns valid data types": {"pickleLocation":"33:3","tags":["@getUserById"]},
  "GET User by ID returns valid timestamp fields": {"pickleLocation":"42:3","tags":["@getUserById"]},
};