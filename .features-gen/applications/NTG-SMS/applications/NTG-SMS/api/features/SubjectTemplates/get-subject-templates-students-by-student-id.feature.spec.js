/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates-students-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Subject Template", () => {

  test("GET Get Student Subject Template returns successful response", { tag: ["@getStudentSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentSubjectTemplate\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates-students-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@getStudentSubjectTemplate"]},
};