/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\patch-subjects-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Patch Update Subject", () => {

  test("POST Create a new subject returns successful response", { tag: ["@patchUpdateSubject"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubject\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as subject id");
  });

  test("PATCH Patch Update Subject returns successful response", { tag: ["@patchUpdateSubject"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchUpdateSubject\" with id \"{STORED_SUBJECT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\patch-subjects-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new subject returns successful response": {"pickleLocation":"6:3","tags":["@patchUpdateSubject"]},
  "PATCH Patch Update Subject returns successful response": {"pickleLocation":"11:3","tags":["@patchUpdateSubject"]},
};