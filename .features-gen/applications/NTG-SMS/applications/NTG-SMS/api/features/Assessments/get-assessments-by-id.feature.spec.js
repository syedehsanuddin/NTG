/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Assessment By Id", () => {

  test("POST Create a new assessment returns successful response", { tag: ["@getAssessmentById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateAssessment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as assessment id");
  });

  test("GET Get Assessment By Id returns successful response", { tag: ["@getAssessmentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssessmentById\" with id \"{STORED_ASSESSMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new assessment returns successful response": {"pickleLocation":"6:3","tags":["@getAssessmentById"]},
  "GET Get Assessment By Id returns successful response": {"pickleLocation":"11:3","tags":["@getAssessmentById"]},
};