/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-academic-subject-by-subject-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Academic Subject Report", () => {

  test("GET Get Academic Subject Report returns successful response", { tag: ["@getAcademicSubjectReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAcademicSubjectReport\" with id \"{STORED_SUBJECT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-academic-subject-by-subject-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Academic Subject Report returns successful response": {"pickleLocation":"6:3","tags":["@getAcademicSubjectReport"]},
};