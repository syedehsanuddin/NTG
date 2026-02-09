/** Generated from: applications\NTG-RMS\api\features\Roles\get-user-roles.feature */
import { test } from "playwright-bdd";

test.describe("Get user roles", () => {

  test("GET Get user roles returns successful response", { tag: ["@getUserRoles"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getUserRoles\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Roles\\get-user-roles.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get user roles returns successful response": {"pickleLocation":"6:3","tags":["@getUserRoles"]},
};