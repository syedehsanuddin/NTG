/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-draft-upload.feature */
import { test } from "playwright-bdd";

test.describe("Post Draft Upload Assessment", () => {

  test("POST Post Draft Upload Assessment returns successful response", { tag: ["@postDraftUploadAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDraftUploadAssessment\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-draft-upload.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Draft Upload Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postDraftUploadAssessment"]},
};