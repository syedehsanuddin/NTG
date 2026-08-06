/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-by-id-attachments.feature */
import { test } from "playwright-bdd";

test.describe("Post Attachment Assessment", () => {

  test("POST Post Attachment Assessment returns successful response", { tag: ["@postAttachmentAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAttachmentAssessment\" with id \"{STORED_ATTACHMENT_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-by-id-attachments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Attachment Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postAttachmentAssessment"]},
};