/** Generated from: applications\NTG-SMS\api\features\Users\delete-users-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete User", () => {

  test("POST Create a new user returns successful response", { tag: ["@deleteUser"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUser\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as user id");
  });

  test("DELETE Delete User returns successful response", { tag: ["@deleteUser"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteUser\" with id \"{STORED_USER_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\delete-users-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new user returns successful response": {"pickleLocation":"6:3","tags":["@deleteUser"]},
  "DELETE Delete User returns successful response": {"pickleLocation":"11:3","tags":["@deleteUser"]},
};