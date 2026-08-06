/** Generated from: applications\NTG-SMS\api\features\Students\post-students-bulk-import.feature */
import { test } from "playwright-bdd";

test.describe("Post Bulk Import Student", () => {

  test("POST Post Bulk Import Student returns successful response", { tag: ["@postBulkImportStudent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postBulkImportStudent\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\post-students-bulk-import.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Bulk Import Student returns successful response": {"pickleLocation":"6:3","tags":["@postBulkImportStudent"]},
};