/** Generated from: applications\NTG-SMS\api\features\Users\get-users.feature */
import { test } from "playwright-bdd";

test.describe("Get Users", () => {

  test("GET Get Users returns successful response", { tag: ["@getUsersAlma"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUsers\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\get-users.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Users returns successful response": {"pickleLocation":"6:3","tags":["@getUsersAlma"]},
};