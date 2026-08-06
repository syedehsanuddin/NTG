/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\get-teacher-assignments-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Teacher Assignment By Id", () => {

  test("POST Create a new teacherassignment returns successful response", { tag: ["@getTeacherAssignmentById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateTeacherAssignment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as teacherassignment id");
  });

  test("GET Get Teacher Assignment By Id returns successful response", { tag: ["@getTeacherAssignmentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTeacherAssignmentById\" with id \"{STORED_TEACHERASSIGNMENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\get-teacher-assignments-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new teacherassignment returns successful response": {"pickleLocation":"6:3","tags":["@getTeacherAssignmentById"]},
  "GET Get Teacher Assignment By Id returns successful response": {"pickleLocation":"11:3","tags":["@getTeacherAssignmentById"]},
};