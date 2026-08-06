/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\post-levels.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Level", () => {

  test("POST Post Create Level returns successful response", { tag: ["@postCreateLevel"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateLevel\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\post-levels.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Level returns successful response": {"pickleLocation":"6:3","tags":["@postCreateLevel"]},
};