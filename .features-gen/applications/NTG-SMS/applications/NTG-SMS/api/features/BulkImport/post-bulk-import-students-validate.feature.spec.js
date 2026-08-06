/** Generated from: applications\NTG-SMS\api\features\BulkImport\post-bulk-import-students-validate.feature */
import { test } from "playwright-bdd";

test.describe("Post Student Validate Bulk Import", () => {

  test("POST Post Student Validate Bulk Import returns successful response", { tag: ["@postStudentValidateBulkImport"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postStudentValidateBulkImport\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\BulkImport\\post-bulk-import-students-validate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Student Validate Bulk Import returns successful response": {"pickleLocation":"6:3","tags":["@postStudentValidateBulkImport"]},
};