/** Generated from: applications\NTG-SMS\api\features\Attendance\get-attendance-summary-class-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Summary Clas Attendance", () => {

  test("GET Get Summary Clas Attendance returns successful response", { tag: ["@getSummaryClasAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSummaryClasAttendance\" with id \"{STORED_CLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\get-attendance-summary-class-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Summary Clas Attendance returns successful response": {"pickleLocation":"6:3","tags":["@getSummaryClasAttendance"]},
};