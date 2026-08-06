/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\delete-subjects-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Subject", () => {

  test("POST Create a new subject returns successful response", { tag: ["@deleteSubject"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubject\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as subject id");
  });

  test("DELETE Delete Subject returns successful response", { tag: ["@deleteSubject"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteSubject\" with id \"{STORED_SUBJECT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\delete-subjects-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new subject returns successful response": {"pickleLocation":"6:3","tags":["@deleteSubject"]},
  "DELETE Delete Subject returns successful response": {"pickleLocation":"11:3","tags":["@deleteSubject"]},
};