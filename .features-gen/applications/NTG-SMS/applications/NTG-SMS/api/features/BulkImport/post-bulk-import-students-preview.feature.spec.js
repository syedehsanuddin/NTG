/** Generated from: applications\NTG-SMS\api\features\BulkImport\post-bulk-import-students-preview.feature */
import { test } from "playwright-bdd";

test.describe("Post Student Preview Bulk Import", () => {

  test("POST Post Student Preview Bulk Import returns successful response", { tag: ["@postStudentPreviewBulkImport"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postStudentPreviewBulkImport\" with payload '{\"file\":\"string\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\BulkImport\\post-bulk-import-students-preview.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Student Preview Bulk Import returns successful response": {"pickleLocation":"6:3","tags":["@postStudentPreviewBulkImport"]},
};