/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\delete-subject-templates-students-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Student Subject Template", () => {

  test("DELETE Delete Student Subject Template returns successful response", { tag: ["@deleteStudentSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteStudentSubjectTemplate\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\delete-subject-templates-students-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete Student Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@deleteStudentSubjectTemplate"]},
};