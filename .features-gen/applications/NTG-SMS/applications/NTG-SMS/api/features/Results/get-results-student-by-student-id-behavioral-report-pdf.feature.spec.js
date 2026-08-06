/** Generated from: applications\NTG-SMS\api\features\Results\get-results-student-by-student-id-behavioral-report-pdf.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Behavioral Report Pdf Result", () => {

  test("GET Get Student Behavioral Report Pdf Result returns successful response", { tag: ["@getStudentBehavioralReportPdfResult"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentBehavioralReportPdfResult\" with id \"{STORED_PDF_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\get-results-student-by-student-id-behavioral-report-pdf.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Behavioral Report Pdf Result returns successful response": {"pickleLocation":"6:3","tags":["@getStudentBehavioralReportPdfResult"]},
};