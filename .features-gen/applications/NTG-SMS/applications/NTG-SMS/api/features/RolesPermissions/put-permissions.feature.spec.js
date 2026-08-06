/** Generated from: applications\NTG-SMS\api\features\RolesPermissions\put-permissions.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Permission", () => {

  test("PUT Put Update Permission returns successful response", { tag: ["@putUpdatePermission"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdatePermission\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\RolesPermissions\\put-permissions.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Update Permission returns successful response": {"pickleLocation":"6:3","tags":["@putUpdatePermission"]},
};