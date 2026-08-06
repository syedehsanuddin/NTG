/** Generated from: applications\NTG-SMS\api\features\StudentSelfService\get-student-assessments.feature */
import { test } from "playwright-bdd";

test.describe("Get Assessment Student", () => {

  test("GET Get Assessment Student returns successful response", { tag: ["@getAssessmentStudent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAssessmentStudent\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\StudentSelfService\\get-student-assessments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Assessment Student returns successful response": {"pickleLocation":"6:3","tags":["@getAssessmentStudent"]},
};