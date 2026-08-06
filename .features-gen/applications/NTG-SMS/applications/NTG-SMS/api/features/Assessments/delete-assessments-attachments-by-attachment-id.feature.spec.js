/** Generated from: applications\NTG-SMS\api\features\Assessments\delete-assessments-attachments-by-attachment-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Attachment Assessment", () => {

  test("DELETE Delete Attachment Assessment returns successful response", { tag: ["@deleteAttachmentAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteAttachmentAssessment\" with id \"{STORED_ATTACHMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\delete-assessments-attachments-by-attachment-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Attachment Assessment returns successful response": {"pickleLocation":"6:3","tags":["@deleteAttachmentAssessment"]},
};