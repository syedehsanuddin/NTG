/** Generated from: applications\NTG-SMS\api\features\Results\get-results-class-section-by-class-section-id-bulk-pdf.feature */
import { test } from "playwright-bdd";

test.describe("Get Class Section Bulk Pdf Result", () => {

  test("GET Get Class Section Bulk Pdf Result returns successful response", { tag: ["@getClassSectionBulkPdfResult"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassSectionBulkPdfResult\" with id \"{STORED_BULKPDF_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\get-results-class-section-by-class-section-id-bulk-pdf.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Class Section Bulk Pdf Result returns successful response": {"pickleLocation":"6:3","tags":["@getClassSectionBulkPdfResult"]},
};