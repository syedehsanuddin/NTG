/** Generated from: applications\NTG-SMS\api\features\Grades\post-grades-bulk.feature */
import { test } from "playwright-bdd";

test.describe("Post Bulk Grade", () => {

  test("POST Post Bulk Grade returns successful response", { tag: ["@postBulkGrade"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postBulkGrade\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\post-grades-bulk.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Bulk Grade returns successful response": {"pickleLocation":"6:3","tags":["@postBulkGrade"]},
};