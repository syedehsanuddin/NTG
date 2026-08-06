/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\delete-teacher-assignments-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Teacher Assignment", () => {

  test("POST Create a new teacherassignment returns successful response", { tag: ["@deleteTeacherAssignment"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateTeacherAssignment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as teacherassignment id");
  });

  test("DELETE Delete Teacher Assignment returns successful response", { tag: ["@deleteTeacherAssignment"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteTeacherAssignment\" with id \"{STORED_TEACHERASSIGNMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\delete-teacher-assignments-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new teacherassignment returns successful response": {"pickleLocation":"6:3","tags":["@deleteTeacherAssignment"]},
  "DELETE Delete Teacher Assignment returns successful response": {"pickleLocation":"11:3","tags":["@deleteTeacherAssignment"]},
};