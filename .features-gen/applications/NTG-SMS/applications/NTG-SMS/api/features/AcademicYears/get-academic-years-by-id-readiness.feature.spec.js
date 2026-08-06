/** Generated from: applications\NTG-SMS\api\features\AcademicYears\get-academic-years-by-id-readiness.feature */
import { test } from "playwright-bdd";

test.describe("Get Readines Academic Year By Id", () => {

  test("GET Get Readines Academic Year By Id returns successful response", { tag: ["@getReadinesAcademicYearById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getReadinesAcademicYearById\" with id \"{STORED_READINES_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\get-academic-years-by-id-readiness.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Readines Academic Year By Id returns successful response": {"pickleLocation":"6:3","tags":["@getReadinesAcademicYearById"]},
};