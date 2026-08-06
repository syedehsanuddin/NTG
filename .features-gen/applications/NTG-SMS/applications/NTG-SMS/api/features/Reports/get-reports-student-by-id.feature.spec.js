/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-student-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Report By Id", () => {

  test("GET Get Student Report By Id returns successful response", { tag: ["@getStudentReportById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentReportById\" with id \"{STORED_STUDENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-student-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Report By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentReportById"]},
};