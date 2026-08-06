/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\post-subject-templates-students-by-student-id-assign.feature */
import { test } from "playwright-bdd";

test.describe("Post Student Assign Subject Template", () => {

  test("POST Post Student Assign Subject Template returns successful response", { tag: ["@postStudentAssignSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postStudentAssignSubjectTemplate\" with id \"{STORED_ASSIGN_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\post-subject-templates-students-by-student-id-assign.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Student Assign Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@postStudentAssignSubjectTemplate"]},
};