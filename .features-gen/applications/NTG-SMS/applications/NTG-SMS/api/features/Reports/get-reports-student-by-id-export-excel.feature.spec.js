/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-student-by-id-export-excel.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Export Excel Report By Id", () => {

  test("GET Get Student Export Excel Report By Id returns successful response", { tag: ["@getStudentExportExcelReportById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentExportExcelReportById\" with id \"{STORED_EXCEL_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-student-by-id-export-excel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Export Excel Report By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStudentExportExcelReportById"]},
};