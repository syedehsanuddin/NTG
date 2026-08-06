/** Generated from: applications\NTG-SMS\api\features\PublicApi\post-public-statistics-by-branch-code-verify.feature */
import { test } from "playwright-bdd";

test.describe("Post Statistic Verify Public", () => {

  test("POST Post Statistic Verify Public returns successful response", { tag: ["@postStatisticVerifyPublic"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postStatisticVerifyPublic\" with id \"{STORED_VERIFY_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PublicApi\\post-public-statistics-by-branch-code-verify.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Statistic Verify Public returns successful response": {"pickleLocation":"6:3","tags":["@postStatisticVerifyPublic"]},
};