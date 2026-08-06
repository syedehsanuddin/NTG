/** Generated from: applications\NTG-SMS\api\features\AcademicYears\post-academic-years.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Academic Year", () => {

  test("POST Post Create Academic Year returns successful response", { tag: ["@postCreateAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateAcademicYear\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\post-academic-years.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@postCreateAcademicYear"]},
};