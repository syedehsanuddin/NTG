/** Generated from: applications\NTG-SMS\api\features\Grades\get-grades-assessment-by-assessment-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Assessment Grade", () => {

  test("GET Get Assessment Grade returns successful response", { tag: ["@getAssessmentGrade"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssessmentGrade\" with id \"{STORED_ASSESSMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\get-grades-assessment-by-assessment-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assessment Grade returns successful response": {"pickleLocation":"6:3","tags":["@getAssessmentGrade"]},
};