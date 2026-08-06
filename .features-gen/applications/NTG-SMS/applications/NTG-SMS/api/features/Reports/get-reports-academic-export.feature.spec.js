/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-academic-export.feature */
import { test } from "playwright-bdd";

test.describe("Get Academic Export Report", () => {

  test("GET Get Academic Export Report returns successful response", { tag: ["@getAcademicExportReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAcademicExportReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-academic-export.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Academic Export Report returns successful response": {"pickleLocation":"6:3","tags":["@getAcademicExportReport"]},
};