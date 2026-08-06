/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-academic-comparison.feature */
import { test } from "playwright-bdd";

test.describe("Get Academic Comparison Report", () => {

  test("GET Get Academic Comparison Report returns successful response", { tag: ["@getAcademicComparisonReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAcademicComparisonReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-academic-comparison.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Academic Comparison Report returns successful response": {"pickleLocation":"6:3","tags":["@getAcademicComparisonReport"]},
};