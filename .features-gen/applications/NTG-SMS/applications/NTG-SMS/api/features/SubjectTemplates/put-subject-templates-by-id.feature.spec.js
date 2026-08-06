/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\put-subject-templates-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Subject Template", () => {

  test("POST Create a new subjecttemplate returns successful response", { tag: ["@putUpdateSubjectTemplate"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateSubjectTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as subjecttemplate id");
  });

  test("PUT Put Update Subject Template returns successful response", { tag: ["@putUpdateSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateSubjectTemplate\" with id \"{STORED_SUBJECTTEMPLATE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\put-subject-templates-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new subjecttemplate returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateSubjectTemplate"]},
  "PUT Put Update Subject Template returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateSubjectTemplate"]},
};