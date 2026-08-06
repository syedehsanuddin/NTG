/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\delete-levels-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Level", () => {

  test("POST Create a new level returns successful response", { tag: ["@deleteLevel"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateLevel\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as level id");
  });

  test("DELETE Delete Level returns successful response", { tag: ["@deleteLevel"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteLevel\" with id \"{STORED_LEVEL_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\delete-levels-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new level returns successful response": {"pickleLocation":"6:3","tags":["@deleteLevel"]},
  "DELETE Delete Level returns successful response": {"pickleLocation":"11:3","tags":["@deleteLevel"]},
};