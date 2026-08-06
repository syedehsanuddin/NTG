/** Generated from: applications\NTG-SMS\api\features\Users\put-users-by-id-roles.feature */
import { test } from "playwright-bdd";

test.describe("Put Role User", () => {

  test("PUT Put Role User returns successful response", { tag: ["@putRoleUser"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putRoleUser\" with id \"{STORED_ROLE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\put-users-by-id-roles.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Role User returns successful response": {"pickleLocation":"6:3","tags":["@putRoleUser"]},
};