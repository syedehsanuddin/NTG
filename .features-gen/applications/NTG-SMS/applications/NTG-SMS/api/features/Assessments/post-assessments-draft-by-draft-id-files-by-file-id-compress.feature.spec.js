/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-draft-by-draft-id-files-by-file-id-compress.feature */
import { test } from "playwright-bdd";

test.describe("Post Draft File Compres Assessment", () => {

  test("POST Post Draft File Compres Assessment returns successful response", { tag: ["@postDraftFileCompresAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDraftFileCompresAssessment\" with id \"{STORED_COMPRES_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-draft-by-draft-id-files-by-file-id-compress.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Draft File Compres Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postDraftFileCompresAssessment"]},
};