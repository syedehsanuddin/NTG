/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-my.feature */
import { test } from "playwright-bdd";

test.describe("Get My Assessment", () => {

  test("GET Get My Assessment returns successful response", { tag: ["@getMyAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMyAssessment\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-my.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get My Assessment returns successful response": {"pickleLocation":"6:3","tags":["@getMyAssessment"]},
};