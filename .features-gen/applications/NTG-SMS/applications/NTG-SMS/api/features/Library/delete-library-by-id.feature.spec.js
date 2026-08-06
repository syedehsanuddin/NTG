/** Generated from: applications\NTG-SMS\api\features\Library\delete-library-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Library", () => {

  test("POST Create a new library returns successful response", { tag: ["@deleteLibrary"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateLibrary\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as library id");
  });

  test("DELETE Delete Library returns successful response", { tag: ["@deleteLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteLibrary\" with id \"{STORED_LIBRARY_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\delete-library-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new library returns successful response": {"pickleLocation":"6:3","tags":["@deleteLibrary"]},
  "DELETE Delete Library returns successful response": {"pickleLocation":"11:3","tags":["@deleteLibrary"]},
};