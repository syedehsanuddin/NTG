/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\post-subjects.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Subject", () => {

  test("POST Post Create Subject returns successful response", { tag: ["@postCreateSubject"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateSubject\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\post-subjects.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Subject returns successful response": {"pickleLocation":"6:3","tags":["@postCreateSubject"]},
};