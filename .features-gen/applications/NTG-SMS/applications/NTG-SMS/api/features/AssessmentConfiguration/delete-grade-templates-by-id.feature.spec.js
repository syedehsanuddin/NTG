/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\delete-grade-templates-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Grade Template", () => {

  test("POST Create a new gradetemplate returns successful response", { tag: ["@deleteGradeTemplate"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateGradeTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as gradetemplate id");
  });

  test("DELETE Delete Grade Template returns successful response", { tag: ["@deleteGradeTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteGradeTemplate\" with id \"{STORED_GRADETEMPLATE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\delete-grade-templates-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new gradetemplate returns successful response": {"pickleLocation":"6:3","tags":["@deleteGradeTemplate"]},
  "DELETE Delete Grade Template returns successful response": {"pickleLocation":"11:3","tags":["@deleteGradeTemplate"]},
};