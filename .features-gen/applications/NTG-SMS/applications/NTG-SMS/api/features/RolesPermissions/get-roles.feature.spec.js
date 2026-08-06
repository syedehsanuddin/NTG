/** Generated from: applications\NTG-SMS\api\features\RolesPermissions\get-roles.feature */
import { test } from "playwright-bdd";

test.describe("Get Roles", () => {

  test("GET Get Roles returns successful response", { tag: ["@getRoles"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getRoles\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\RolesPermissions\\get-roles.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Roles returns successful response": {"pickleLocation":"6:3","tags":["@getRoles"]},
};