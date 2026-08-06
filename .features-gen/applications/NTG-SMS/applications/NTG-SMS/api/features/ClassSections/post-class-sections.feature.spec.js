/** Generated from: applications\NTG-SMS\api\features\ClassSections\post-class-sections.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Class Section", () => {

  test("POST Post Create Class Section returns successful response", { tag: ["@postCreateClassSection"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateClassSection\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\post-class-sections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Class Section returns successful response": {"pickleLocation":"6:3","tags":["@postCreateClassSection"]},
};