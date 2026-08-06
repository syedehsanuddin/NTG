/** Generated from: applications\NTG-SMS\api\features\StudentSelfService\post-student-assessments-by-id-status.feature */
import { test } from "playwright-bdd";

test.describe("Post Assessment Statu Student", () => {

  test("POST Post Assessment Statu Student returns successful response", { tag: ["@postAssessmentStatuStudent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAssessmentStatuStudent\" with id \"{STORED_STATU_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\StudentSelfService\\post-student-assessments-by-id-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Assessment Statu Student returns successful response": {"pickleLocation":"6:3","tags":["@postAssessmentStatuStudent"]},
};