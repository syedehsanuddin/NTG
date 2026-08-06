/** Generated from: applications\NTG-SMS\api\features\TeacherAssignments\get-teacher-assignments-by-class-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get By Clas Teacher Assignment", () => {

  test("GET Get By Clas Teacher Assignment returns successful response", { tag: ["@getByClasTeacherAssignment"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getByClasTeacherAssignment\" with id \"{STORED_BYCLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TeacherAssignments\\get-teacher-assignments-by-class-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get By Clas Teacher Assignment returns successful response": {"pickleLocation":"6:3","tags":["@getByClasTeacherAssignment"]},
};