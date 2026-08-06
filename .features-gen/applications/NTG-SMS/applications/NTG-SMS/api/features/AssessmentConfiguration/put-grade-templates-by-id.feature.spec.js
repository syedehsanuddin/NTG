/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\put-grade-templates-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Grade Template", () => {

  test("POST Create a new gradetemplate returns successful response", { tag: ["@putUpdateGradeTemplate"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateGradeTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as gradetemplate id");
  });

  test("PUT Put Update Grade Template returns successful response", { tag: ["@putUpdateGradeTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateGradeTemplate\" with id \"{STORED_GRADETEMPLATE_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\put-grade-templates-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new gradetemplate returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateGradeTemplate"]},
  "PUT Put Update Grade Template returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateGradeTemplate"]},
};