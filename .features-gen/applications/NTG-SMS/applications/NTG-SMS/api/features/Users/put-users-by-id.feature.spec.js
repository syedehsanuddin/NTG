/** Generated from: applications\NTG-SMS\api\features\Users\put-users-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update User", () => {

  test("POST Create a new user returns successful response", { tag: ["@putUpdateUser"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUser\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as user id");
  });

  test("PUT Put Update User returns successful response", { tag: ["@putUpdateUser"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateUser\" with id \"{STORED_USER_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\put-users-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new user returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateUser"]},
  "PUT Put Update User returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateUser"]},
};