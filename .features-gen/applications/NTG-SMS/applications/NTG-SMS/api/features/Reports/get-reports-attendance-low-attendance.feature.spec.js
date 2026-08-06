/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-attendance-low-attendance.feature */
import { test } from "playwright-bdd";

test.describe("Get Attendance Low Attendance Report", () => {

  test("GET Get Attendance Low Attendance Report returns successful response", { tag: ["@getAttendanceLowAttendanceReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttendanceLowAttendanceReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-attendance-low-attendance.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attendance Low Attendance Report returns successful response": {"pickleLocation":"6:3","tags":["@getAttendanceLowAttendanceReport"]},
};