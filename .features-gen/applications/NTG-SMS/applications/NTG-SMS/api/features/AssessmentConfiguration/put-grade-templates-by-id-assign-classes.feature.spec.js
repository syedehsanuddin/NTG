/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\put-grade-templates-by-id-assign-classes.feature */
import { test } from "playwright-bdd";

test.describe("Put Assign Classe Grade Template", () => {

  test("PUT Put Assign Classe Grade Template returns successful response", { tag: ["@putAssignClasseGradeTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putAssignClasseGradeTemplate\" with id \"{STORED_ASSIGNCLASSE_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\put-grade-templates-by-id-assign-classes.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Assign Classe Grade Template returns successful response": {"pickleLocation":"6:3","tags":["@putAssignClasseGradeTemplate"]},
};