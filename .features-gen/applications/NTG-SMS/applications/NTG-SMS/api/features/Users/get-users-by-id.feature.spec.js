/** Generated from: applications\NTG-SMS\api\features\Users\get-users-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get User By Id", () => {

  test("POST Create a new user returns successful response", { tag: ["@getUserById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateUser\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as user id");
  });

  test("GET Get User By Id returns successful response", { tag: ["@getUserById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUserById\" with id \"{STORED_USER_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\get-users-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new user returns successful response": {"pickleLocation":"6:3","tags":["@getUserById"]},
  "GET Get User By Id returns successful response": {"pickleLocation":"11:3","tags":["@getUserById"]},
};