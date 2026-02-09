/** Generated from: applications\NTG-RMS\api\features\Roles\get-role-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get role by ID with permissions", () => {

  test("GET Get role by ID with permissions returns successful response", { tag: ["@getRoleById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getRoleById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Roles\\get-role-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get role by ID with permissions returns successful response": {"pickleLocation":"6:3","tags":["@getRoleById"]},
};