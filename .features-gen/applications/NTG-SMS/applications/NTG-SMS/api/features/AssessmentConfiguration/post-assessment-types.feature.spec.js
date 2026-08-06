/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\post-assessment-types.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Assessment Type", () => {

  test("POST Post Create Assessment Type returns successful response", { tag: ["@postCreateAssessmentType"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateAssessmentType\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\post-assessment-types.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Assessment Type returns successful response": {"pickleLocation":"6:3","tags":["@postCreateAssessmentType"]},
};