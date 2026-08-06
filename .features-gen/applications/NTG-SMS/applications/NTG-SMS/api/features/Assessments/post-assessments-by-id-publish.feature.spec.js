/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments-by-id-publish.feature */
import { test } from "playwright-bdd";

test.describe("Post Publish Assessment", () => {

  test("POST Post Publish Assessment returns successful response", { tag: ["@postPublishAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postPublishAssessment\" with id \"{STORED_PUBLISH_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments-by-id-publish.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Publish Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postPublishAssessment"]},
};