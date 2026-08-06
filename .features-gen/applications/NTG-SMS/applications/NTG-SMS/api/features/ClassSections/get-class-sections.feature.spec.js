/** Generated from: applications\NTG-SMS\api\features\ClassSections\get-class-sections.feature */
import { test } from "playwright-bdd";

test.describe("Get Class Sections", () => {

  test("GET Get Class Sections returns successful response", { tag: ["@getClassSections"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassSections\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\get-class-sections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Class Sections returns successful response": {"pickleLocation":"6:3","tags":["@getClassSections"]},
};