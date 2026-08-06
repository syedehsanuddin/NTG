/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-class-by-class-section-id-export-excel.feature */
import { test } from "playwright-bdd";

test.describe("Get Clas Export Excel Report", () => {

  test("GET Get Clas Export Excel Report returns successful response", { tag: ["@getClasExportExcelReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasExportExcelReport\" with id \"{STORED_EXCEL_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-class-by-class-section-id-export-excel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Clas Export Excel Report returns successful response": {"pickleLocation":"6:3","tags":["@getClasExportExcelReport"]},
};