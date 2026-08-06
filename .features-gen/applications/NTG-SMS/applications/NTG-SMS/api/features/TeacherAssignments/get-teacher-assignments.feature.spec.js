/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\get-teacher-assignments.feature */
import { test } from "playwright-bdd";

test.describe("Get Teacher Assignments", () => {

  test("GET Get Teacher Assignments returns successful response", { tag: ["@getTeacherAssignments"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTeacherAssignments\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\get-teacher-assignments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Teacher Assignments returns successful response": {"pickleLocation":"6:3","tags":["@getTeacherAssignments"]},
};