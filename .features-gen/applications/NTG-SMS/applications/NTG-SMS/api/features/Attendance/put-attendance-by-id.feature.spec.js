/** Generated from: applications\NTG-SMS\api\features\Attendance\put-attendance-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Attendance", () => {

  test("PUT Put Update Attendance returns successful response", { tag: ["@putUpdateAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateAttendance\" with id \"{STORED_ATTENDANCE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\put-attendance-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Update Attendance returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateAttendance"]},
};