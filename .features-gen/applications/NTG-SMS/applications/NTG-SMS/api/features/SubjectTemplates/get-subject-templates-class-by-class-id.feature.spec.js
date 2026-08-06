/** Generated from: applications\NTG-SMS\api\features\SubjectTemplates\get-subject-templates-class-by-class-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Clas Subject Template", () => {

  test("GET Get Clas Subject Template returns successful response", { tag: ["@getClasSubjectTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasSubjectTemplate\" with id \"{STORED_CLAS_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SubjectTemplates\\get-subject-templates-class-by-class-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Clas Subject Template returns successful response": {"pickleLocation":"6:3","tags":["@getClasSubjectTemplate"]},
};