/** Generated from: applications\NTG-SMS\api\features\ClassSections\get-class-sections-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Class Section By Id", () => {

  test("POST Create a new classsection returns successful response", { tag: ["@getClassSectionById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateClassSection\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as classsection id");
  });

  test("GET Get Class Section By Id returns successful response", { tag: ["@getClassSectionById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassSectionById\" with id \"{STORED_CLASSSECTION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\get-class-sections-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new classsection returns successful response": {"pickleLocation":"6:3","tags":["@getClassSectionById"]},
  "GET Get Class Section By Id returns successful response": {"pickleLocation":"11:3","tags":["@getClassSectionById"]},
};