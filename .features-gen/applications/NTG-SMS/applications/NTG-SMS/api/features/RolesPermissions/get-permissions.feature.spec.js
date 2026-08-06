/** Generated from: applications\NTG-SMS\api\features\RolesPermissions\get-permissions.feature */
import { test } from "playwright-bdd";

test.describe("Get Permissions", () => {

  test("GET Get Permissions returns successful response", { tag: ["@getPermissions"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPermissions\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\RolesPermissions\\get-permissions.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Permissions returns successful response": {"pickleLocation":"6:3","tags":["@getPermissions"]},
};