/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\get-levels.feature */
import { test } from "playwright-bdd";

test.describe("Get Levels", () => {

  test("GET Get Levels returns successful response", { tag: ["@getLevels"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLevels\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\get-levels.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Levels returns successful response": {"pickleLocation":"6:3","tags":["@getLevels"]},
};