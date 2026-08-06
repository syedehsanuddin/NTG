/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-attendance-summary.feature */
import { test } from "playwright-bdd";

test.describe("Get Attendance Summary Report", () => {

  test("GET Get Attendance Summary Report returns successful response", { tag: ["@getAttendanceSummaryReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttendanceSummaryReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-attendance-summary.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attendance Summary Report returns successful response": {"pickleLocation":"6:3","tags":["@getAttendanceSummaryReport"]},
};