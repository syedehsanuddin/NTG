/** Generated from: applications\NTG-SMS\api\features\PublicApi\post-public-request-password-reset.feature */
import { test } from "playwright-bdd";

test.describe("Post Request Password Reset Public", () => {

  test("POST Post Request Password Reset Public returns successful response", { tag: ["@postRequestPasswordResetPublic"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postRequestPasswordResetPublic\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PublicApi\\post-public-request-password-reset.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Request Password Reset Public returns successful response": {"pickleLocation":"6:3","tags":["@postRequestPasswordResetPublic"]},
};