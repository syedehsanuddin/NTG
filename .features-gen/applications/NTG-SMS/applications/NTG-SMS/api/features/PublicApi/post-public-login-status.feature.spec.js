/** Generated from: applications\NTG-SMS\api\features\PublicApi\post-public-login-status.feature */
import { test } from "playwright-bdd";

test.describe("Post Login Statu Public", () => {

  test("POST Post Login Statu Public returns successful response", { tag: ["@postLoginStatuPublic"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postLoginStatuPublic\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PublicApi\\post-public-login-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Login Statu Public returns successful response": {"pickleLocation":"6:3","tags":["@postLoginStatuPublic"]},
};