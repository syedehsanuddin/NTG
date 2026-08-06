/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-by-id-attachments.feature */
import { test } from "playwright-bdd";

test.describe("Get Attachment Assessment By Id", () => {

  test("GET Get Attachment Assessment By Id returns successful response", { tag: ["@getAttachmentAssessmentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttachmentAssessmentById\" with id \"{STORED_ATTACHMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-by-id-attachments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attachment Assessment By Id returns successful response": {"pickleLocation":"6:3","tags":["@getAttachmentAssessmentById"]},
};