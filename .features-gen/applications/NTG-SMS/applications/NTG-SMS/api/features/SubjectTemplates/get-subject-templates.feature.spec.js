/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates.feature */
import { test } from "playwright-bdd";

test.describe("Get Subject Templates", () => {

  test("GET Get Subject Templates returns successful response", { tag: ["@getSubjectTemplates"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSubjectTemplates\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Subject Templates returns successful response": {"pickleLocation":"6:3","tags":["@getSubjectTemplates"]},
};