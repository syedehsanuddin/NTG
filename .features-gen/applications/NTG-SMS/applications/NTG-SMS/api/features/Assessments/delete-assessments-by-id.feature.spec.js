/** Generated from: applications\NTG-SMS\api\features\Assessments\delete-assessments-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Assessment", () => {

  test("POST Create a new assessment returns successful response", { tag: ["@deleteAssessment"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAssessment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as assessment id");
  });

  test("DELETE Delete Assessment returns successful response", { tag: ["@deleteAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteAssessment\" with id \"{STORED_ASSESSMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\delete-assessments-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new assessment returns successful response": {"pickleLocation":"6:3","tags":["@deleteAssessment"]},
  "DELETE Delete Assessment returns successful response": {"pickleLocation":"11:3","tags":["@deleteAssessment"]},
};