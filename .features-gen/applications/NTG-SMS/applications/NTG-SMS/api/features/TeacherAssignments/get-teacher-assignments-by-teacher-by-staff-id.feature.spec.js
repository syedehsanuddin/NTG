/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\get-teacher-assignments-by-teacher-by-staff-id.feature */
import { test } from "playwright-bdd";

test.describe("Get By Teacher Teacher Assignment", () => {

  test("GET Get By Teacher Teacher Assignment returns successful response", { tag: ["@getByTeacherTeacherAssignment"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getByTeacherTeacherAssignment\" with id \"{STORED_BYTEACHER_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\get-teacher-assignments-by-teacher-by-staff-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get By Teacher Teacher Assignment returns successful response": {"pickleLocation":"6:3","tags":["@getByTeacherTeacherAssignment"]},
};