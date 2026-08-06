/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\delete-sections-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Section", () => {

  test("POST Create a new section returns successful response", { tag: ["@deleteSection"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSection\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as section id");
  });

  test("DELETE Delete Section returns successful response", { tag: ["@deleteSection"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteSection\" with id \"{STORED_SECTION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\delete-sections-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new section returns successful response": {"pickleLocation":"6:3","tags":["@deleteSection"]},
  "DELETE Delete Section returns successful response": {"pickleLocation":"11:3","tags":["@deleteSection"]},
};