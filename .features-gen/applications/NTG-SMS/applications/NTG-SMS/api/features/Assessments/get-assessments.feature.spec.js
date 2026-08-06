/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments.feature */
import { test } from "playwright-bdd";

test.describe("Get Assessments", () => {

  test("GET Get Assessments returns successful response", { tag: ["@getAssessments"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssessments\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assessments returns successful response": {"pickleLocation":"6:3","tags":["@getAssessments"]},
};