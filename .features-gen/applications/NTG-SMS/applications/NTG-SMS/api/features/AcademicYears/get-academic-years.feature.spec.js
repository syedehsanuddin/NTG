/** Generated from: applications\NTG-SMS\api\features\AcademicYears\get-academic-years.feature */
import { test } from "playwright-bdd";

test.describe("Get Academic Years", () => {

  test("GET Get Academic Years returns successful response", { tag: ["@getAcademicYears"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAcademicYears\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\get-academic-years.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Academic Years returns successful response": {"pickleLocation":"6:3","tags":["@getAcademicYears"]},
};