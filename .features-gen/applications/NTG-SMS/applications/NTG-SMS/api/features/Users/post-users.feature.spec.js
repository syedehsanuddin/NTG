/** Generated from: applications\NTG-SMS\api\features\Users\post-users.feature */
import { test } from "playwright-bdd";

test.describe("Post Create User", () => {

  test("POST Post Create User returns successful response", { tag: ["@postCreateUser"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateUser\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\post-users.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create User returns successful response": {"pickleLocation":"6:3","tags":["@postCreateUser"]},
};