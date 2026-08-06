/** Generated from: applications\NTG-SMS\api\features\PublicApi\post-public-resolve-student-roll.feature */
import { test } from "playwright-bdd";

test.describe("Post Resolve Student Roll Public", () => {

  test("POST Post Resolve Student Roll Public returns successful response", { tag: ["@postResolveStudentRollPublic"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postResolveStudentRollPublic\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PublicApi\\post-public-resolve-student-roll.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Resolve Student Roll Public returns successful response": {"pickleLocation":"6:3","tags":["@postResolveStudentRollPublic"]},
};