/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\post-subject-templates-by-id-assign-levels.feature */
import { test } from "playwright-bdd";

test.describe("Post Assign Level Subject Template", () => {

  test("POST Post Assign Level Subject Template returns successful response", { tag: ["@postAssignLevelSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAssignLevelSubjectTemplate\" with id \"{STORED_ASSIGNLEVEL_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\post-subject-templates-by-id-assign-levels.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Assign Level Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@postAssignLevelSubjectTemplate"]},
};