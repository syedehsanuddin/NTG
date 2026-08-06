/** Generated from: applications\NTG-SMS\api\features\Assessments\delete-assessments-draft-by-draft-id-files-by-file-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Draft File Assessment", () => {

  test("DELETE Delete Draft File Assessment returns successful response", { tag: ["@deleteDraftFileAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteDraftFileAssessment\" with id \"{STORED_FILE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\delete-assessments-draft-by-draft-id-files-by-file-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Draft File Assessment returns successful response": {"pickleLocation":"6:3","tags":["@deleteDraftFileAssessment"]},
};