/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\get-assessment-types.feature */
import { test } from "playwright-bdd";

test.describe("Get Assessment Types", () => {

  test("GET Get Assessment Types returns successful response", { tag: ["@getAssessmentTypes"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssessmentTypes\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\get-assessment-types.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assessment Types returns successful response": {"pickleLocation":"6:3","tags":["@getAssessmentTypes"]},
};