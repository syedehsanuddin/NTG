/** Generated from: applications\NTG-SMS\api\features\Assessments\post-assessments.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Assessment", () => {

  test("POST Post Create Assessment returns successful response", { tag: ["@postCreateAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateAssessment\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\post-assessments.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Assessment returns successful response": {"pickleLocation":"6:3","tags":["@postCreateAssessment"]},
};