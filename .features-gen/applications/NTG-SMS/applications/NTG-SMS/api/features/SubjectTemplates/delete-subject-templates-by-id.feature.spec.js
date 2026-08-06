/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\delete-subject-templates-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Subject Template", () => {

  test("POST Create a new subjecttemplate returns successful response", { tag: ["@deleteSubjectTemplate"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubjectTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as subjecttemplate id");
  });

  test("DELETE Delete Subject Template returns successful response", { tag: ["@deleteSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteSubjectTemplate\" with id \"{STORED_SUBJECTTEMPLATE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\delete-subject-templates-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new subjecttemplate returns successful response": {"pickleLocation":"6:3","tags":["@deleteSubjectTemplate"]},
  "DELETE Delete Subject Template returns successful response": {"pickleLocation":"11:3","tags":["@deleteSubjectTemplate"]},
};