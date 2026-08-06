/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance-report.feature */
import { test } from "playwright-bdd";

test.describe("Get Report Attendance", () => {

  test("GET Get Report Attendance returns successful response", { tag: ["@getReportAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getReportAttendance\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance-report.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Report Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getReportAttendance"]},
};