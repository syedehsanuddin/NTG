/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-by-id-my-status.feature */
import { test } from "playwright-bdd";

test.describe("Post My Statu Assessment", () => {

  test("POST Post My Statu Assessment returns successful response", { tag: ["@postMyStatuAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postMyStatuAssessment\" with id \"{STORED_MYSTATU_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-by-id-my-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post My Statu Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postMyStatuAssessment"]},
};