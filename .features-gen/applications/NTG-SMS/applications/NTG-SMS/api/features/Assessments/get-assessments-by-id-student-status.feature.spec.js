/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-by-id-student-status.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Statu Assessment By Id", () => {

  test("GET Get Student Statu Assessment By Id returns successful response", { tag: ["@getStudentStatuAssessmentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentStatuAssessmentById\" with id \"{STORED_STUDENTSTATU_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-by-id-student-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Statu Assessment By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentStatuAssessmentById"]},
};