/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\patch-levels-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Patch Update Level", () => {

  test("POST Create a new level returns successful response", { tag: ["@patchUpdateLevel"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateLevel\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as level id");
  });

  test("PATCH Patch Update Level returns successful response", { tag: ["@patchUpdateLevel"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchUpdateLevel\" with id \"{STORED_LEVEL_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\patch-levels-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new level returns successful response": {"pickleLocation":"6:3","tags":["@patchUpdateLevel"]},
  "PATCH Patch Update Level returns successful response": {"pickleLocation":"11:3","tags":["@patchUpdateLevel"]},
};