/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\get-grade-templates.feature */
import { test } from "playwright-bdd";

test.describe("Get Grade Templates", () => {

  test("GET Get Grade Templates returns successful response", { tag: ["@getGradeTemplates"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getGradeTemplates\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\get-grade-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Grade Templates returns successful response": {"pickleLocation":"6:3","tags":["@getGradeTemplates"]},
};