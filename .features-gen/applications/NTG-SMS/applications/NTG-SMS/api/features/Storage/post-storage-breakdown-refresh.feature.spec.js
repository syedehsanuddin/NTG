/** Generated from: applications\NTG-SMS\api\features\Storage\post-storage-breakdown-refresh.feature */
import { test } from "playwright-bdd";

test.describe("Post Breakdown Refresh Storage", () => {

  test("POST Post Breakdown Refresh Storage returns successful response", { tag: ["@postBreakdownRefreshStorage"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postBreakdownRefreshStorage\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\post-storage-breakdown-refresh.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Breakdown Refresh Storage returns successful response": {"pickleLocation":"6:3","tags":["@postBreakdownRefreshStorage"]},
};