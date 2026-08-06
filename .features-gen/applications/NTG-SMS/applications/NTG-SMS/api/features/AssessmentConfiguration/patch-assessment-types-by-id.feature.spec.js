/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\patch-assessment-types-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Patch Update Assessment Type", () => {

  test("POST Create a new assessmenttype returns successful response", { tag: ["@patchUpdateAssessmentType"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAssessmentType\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as assessmenttype id");
  });

  test("PATCH Patch Update Assessment Type returns successful response", { tag: ["@patchUpdateAssessmentType"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchUpdateAssessmentType\" with id \"{STORED_ASSESSMENTTYPE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\patch-assessment-types-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new assessmenttype returns successful response": {"pickleLocation":"6:3","tags":["@patchUpdateAssessmentType"]},
  "PATCH Patch Update Assessment Type returns successful response": {"pickleLocation":"11:3","tags":["@patchUpdateAssessmentType"]},
};