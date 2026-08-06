/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance-student-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Attendance", () => {

  test("GET Get Student Attendance returns successful response", { tag: ["@getStudentAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentAttendance\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance-student-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getStudentAttendance"]},
};