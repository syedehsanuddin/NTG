/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance-summary-student-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Summary Student Attendance", () => {

  test("GET Get Summary Student Attendance returns successful response", { tag: ["@getSummaryStudentAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSummaryStudentAttendance\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance-summary-student-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Summary Student Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getSummaryStudentAttendance"]},
};