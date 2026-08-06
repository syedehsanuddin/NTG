/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\post-subject-templates-by-id-assign-classes.feature */
import { test } from "playwright-bdd";

test.describe("Post Assign Classe Subject Template", () => {

  test("POST Post Assign Classe Subject Template returns successful response", { tag: ["@postAssignClasseSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAssignClasseSubjectTemplate\" with id \"{STORED_ASSIGNCLASSE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\post-subject-templates-by-id-assign-classes.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Assign Classe Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@postAssignClasseSubjectTemplate"]},
};