/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-attendance-class-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Attendance Clas Report", () => {

  test("GET Get Attendance Clas Report returns successful response", { tag: ["@getAttendanceClasReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttendanceClasReport\" with id \"{STORED_CLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-attendance-class-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attendance Clas Report returns successful response": {"pickleLocation":"6:3","tags":["@getAttendanceClasReport"]},
};