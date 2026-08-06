/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance.feature */
import { test } from "playwright-bdd";

test.describe("Get Attendance", () => {

  test("GET Get Attendance returns successful response", { tag: ["@getAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAttendance\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getAttendance"]},
};