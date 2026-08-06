/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-student-by-id-academic.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Academic Report By Id", () => {

  test("GET Get Student Academic Report By Id returns successful response", { tag: ["@getStudentAcademicReportById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentAcademicReportById\" with id \"{STORED_ACADEMIC_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-student-by-id-academic.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Academic Report By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentAcademicReportById"]},
};