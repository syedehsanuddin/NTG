/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\get-subjects.feature */
import { test } from "playwright-bdd";

test.describe("Get Subjects", () => {

  test("GET Get Subjects returns successful response", { tag: ["@getSubjects"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSubjects\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\get-subjects.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Subjects returns successful response": {"pickleLocation":"6:3","tags":["@getSubjects"]},
};