/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\get-classes.feature */
import { test } from "playwright-bdd";

test.describe("Get Classes", () => {

  test("GET Get Classes returns successful response", { tag: ["@getClasses"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClasses\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\get-classes.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Classes returns successful response": {"pickleLocation":"6:3","tags":["@getClasses"]},
};