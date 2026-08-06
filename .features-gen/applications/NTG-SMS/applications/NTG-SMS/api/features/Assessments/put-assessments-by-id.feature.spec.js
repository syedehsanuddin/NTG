/** Generated from: applications\NTG-SMS\api\features\Assessments\put-assessments-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Assessment", () => {

  test("POST Create a new assessment returns successful response", { tag: ["@putUpdateAssessment"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAssessment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as assessment id");
  });

  test("PUT Put Update Assessment returns successful response", { tag: ["@putUpdateAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateAssessment\" with id \"{STORED_ASSESSMENT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\put-assessments-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new assessment returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateAssessment"]},
  "PUT Put Update Assessment returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateAssessment"]},
};