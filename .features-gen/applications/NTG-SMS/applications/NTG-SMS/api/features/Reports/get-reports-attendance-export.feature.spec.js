/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-attendance-export.feature */
import { test } from "playwright-bdd";

test.describe("Get Attendance Export Report", () => {

  test("GET Get Attendance Export Report returns successful response", { tag: ["@getAttendanceExportReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttendanceExportReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-attendance-export.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attendance Export Report returns successful response": {"pickleLocation":"6:3","tags":["@getAttendanceExportReport"]},
};