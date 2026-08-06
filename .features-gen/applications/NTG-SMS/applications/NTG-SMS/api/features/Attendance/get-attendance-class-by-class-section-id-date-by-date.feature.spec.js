/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance-class-by-class-section-id-date-by-date.feature */
import { test } from "playwright-bdd";

test.describe("Get Clas Date Attendance", () => {

  test("GET Get Clas Date Attendance returns successful response", { tag: ["@getClasDateAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasDateAttendance\" with id \"{STORED_DATE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance-class-by-class-section-id-date-by-date.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Clas Date Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getClasDateAttendance"]},
};