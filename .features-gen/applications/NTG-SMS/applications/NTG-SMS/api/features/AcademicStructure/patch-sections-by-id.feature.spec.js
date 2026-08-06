/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\patch-sections-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Patch Update Section", () => {

  test("POST Create a new section returns successful response", { tag: ["@patchUpdateSection"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSection\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as section id");
  });

  test("PATCH Patch Update Section returns successful response", { tag: ["@patchUpdateSection"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchUpdateSection\" with id \"{STORED_SECTION_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\patch-sections-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new section returns successful response": {"pickleLocation":"6:3","tags":["@patchUpdateSection"]},
  "PATCH Patch Update Section returns successful response": {"pickleLocation":"11:3","tags":["@patchUpdateSection"]},
};