/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-student-by-id-attendance.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Attendance Report By Id", () => {

  test("GET Get Student Attendance Report By Id returns successful response", { tag: ["@getStudentAttendanceReportById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentAttendanceReportById\" with id \"{STORED_ATTENDANCE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-student-by-id-attendance.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Attendance Report By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentAttendanceReportById"]},
};