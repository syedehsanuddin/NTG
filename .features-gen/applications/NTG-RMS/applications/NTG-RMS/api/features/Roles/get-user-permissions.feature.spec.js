/** Generated from: applications\NTG-RMS\api\features\Roles\get-user-permissions.feature */
import { test } from "playwright-bdd";

test.describe("Get user permissions (aggregated from all roles)", () => {

  test("GET Get user permissions (aggregated from all roles) returns successful response", { tag: ["@getUserPermissions"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserPermissions\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Roles\\get-user-permissions.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get user permissions (aggregated from all roles) returns successful response": {"pickleLocation":"6:3","tags":["@getUserPermissions"]},
};