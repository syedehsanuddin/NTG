/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates-classes-with-templates.feature */
import { test } from "playwright-bdd";

test.describe("Get Classes With Template Subject Template", () => {

  test("GET Get Classes With Template Subject Template returns successful response", { tag: ["@getClassesWithTemplateSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassesWithTemplateSubjectTemplate\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates-classes-with-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Classes With Template Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@getClassesWithTemplateSubjectTemplate"]},
};