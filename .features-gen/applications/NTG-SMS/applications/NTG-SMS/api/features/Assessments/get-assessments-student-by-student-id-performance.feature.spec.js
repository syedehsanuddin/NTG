/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-student-by-student-id-performance.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Performance Assessment", () => {

  test("GET Get Student Performance Assessment returns successful response", { tag: ["@getStudentPerformanceAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentPerformanceAssessment\" with id \"{STORED_PERFORMANCE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-student-by-student-id-performance.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Performance Assessment returns successful response": {"pickleLocation":"6:3","tags":["@getStudentPerformanceAssessment"]},
};