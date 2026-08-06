/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\post-sections.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Section", () => {

  test("POST Post Create Section returns successful response", { tag: ["@postCreateSection"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateSection\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\post-sections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Section returns successful response": {"pickleLocation":"6:3","tags":["@postCreateSection"]},
};