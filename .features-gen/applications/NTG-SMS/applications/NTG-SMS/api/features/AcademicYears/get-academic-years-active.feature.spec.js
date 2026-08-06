/** Generated from: applications\NTG-SMS\api\features\AcademicYears\get-academic-years-active.feature */
import { test } from "playwright-bdd";

test.describe("Get Active Academic Year", () => {

  test("GET Get Active Academic Year returns successful response", { tag: ["@getActiveAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getActiveAcademicYear\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\get-academic-years-active.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Active Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@getActiveAcademicYear"]},
};