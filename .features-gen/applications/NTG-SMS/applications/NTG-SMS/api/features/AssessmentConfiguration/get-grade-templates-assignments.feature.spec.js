/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\get-grade-templates-assignments.feature */
import { test } from "playwright-bdd";

test.describe("Get Assignment Grade Template", () => {

  test("GET Get Assignment Grade Template returns successful response", { tag: ["@getAssignmentGradeTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssignmentGradeTemplate\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\get-grade-templates-assignments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assignment Grade Template returns successful response": {"pickleLocation":"6:3","tags":["@getAssignmentGradeTemplate"]},
};