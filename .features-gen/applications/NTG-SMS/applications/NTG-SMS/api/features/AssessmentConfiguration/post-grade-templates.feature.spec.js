/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\post-grade-templates.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Grade Template", () => {

  test("POST Post Create Grade Template returns successful response", { tag: ["@postCreateGradeTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateGradeTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\post-grade-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Grade Template returns successful response": {"pickleLocation":"6:3","tags":["@postCreateGradeTemplate"]},
};