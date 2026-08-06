/** Generated from: applications\NTG-SMS\api\features\Grades\post-grades.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Grade", () => {

  test("POST Post Create Grade returns successful response", { tag: ["@postCreateGrade"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateGrade\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Grades\\post-grades.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Grade returns successful response": {"pickleLocation":"6:3","tags":["@postCreateGrade"]},
};