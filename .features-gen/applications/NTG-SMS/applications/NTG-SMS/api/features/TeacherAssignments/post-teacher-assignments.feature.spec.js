/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\post-teacher-assignments.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Teacher Assignment", () => {

  test("POST Post Create Teacher Assignment returns successful response", { tag: ["@postCreateTeacherAssignment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateTeacherAssignment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\post-teacher-assignments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Teacher Assignment returns successful response": {"pickleLocation":"6:3","tags":["@postCreateTeacherAssignment"]},
};