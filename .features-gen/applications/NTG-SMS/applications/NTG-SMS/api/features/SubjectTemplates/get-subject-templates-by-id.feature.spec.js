/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Subject Template By Id", () => {

  test("POST Create a new subjecttemplate returns successful response", { tag: ["@getSubjectTemplateById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubjectTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as subjecttemplate id");
  });

  test("GET Get Subject Template By Id returns successful response", { tag: ["@getSubjectTemplateById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSubjectTemplateById\" with id \"{STORED_SUBJECTTEMPLATE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new subjecttemplate returns successful response": {"pickleLocation":"6:3","tags":["@getSubjectTemplateById"]},
  "GET Get Subject Template By Id returns successful response": {"pickleLocation":"11:3","tags":["@getSubjectTemplateById"]},
};