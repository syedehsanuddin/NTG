/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates-level-by-level-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Level Subject Template", () => {

  test("GET Get Level Subject Template returns successful response", { tag: ["@getLevelSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLevelSubjectTemplate\" with id \"{STORED_LEVEL_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates-level-by-level-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Level Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@getLevelSubjectTemplate"]},
};