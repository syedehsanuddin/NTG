/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-by-id-upload.feature */
import { test } from "playwright-bdd";

test.describe("Post Upload Assessment", () => {

  test("POST Post Upload Assessment returns successful response", { tag: ["@postUploadAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postUploadAssessment\" with id \"{STORED_UPLOAD_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-by-id-upload.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Upload Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postUploadAssessment"]},
};