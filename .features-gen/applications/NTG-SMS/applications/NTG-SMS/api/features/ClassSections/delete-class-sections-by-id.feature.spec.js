/** Generated from: applications\NTG-SMS\api\features\ClassSections\delete-class-sections-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Class Section", () => {

  test("POST Create a new classsection returns successful response", { tag: ["@deleteClassSection"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateClassSection\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as classsection id");
  });

  test("DELETE Delete Class Section returns successful response", { tag: ["@deleteClassSection"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteClassSection\" with id \"{STORED_CLASSSECTION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ClassSections\\delete-class-sections-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new classsection returns successful response": {"pickleLocation":"6:3","tags":["@deleteClassSection"]},
  "DELETE Delete Class Section returns successful response": {"pickleLocation":"11:3","tags":["@deleteClassSection"]},
};