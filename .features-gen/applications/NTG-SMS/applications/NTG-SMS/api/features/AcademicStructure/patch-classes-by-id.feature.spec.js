/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\patch-classes-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Patch Update Classe", () => {

  test("POST Create a new classe returns successful response", { tag: ["@patchUpdateClasse"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateClasse\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as classe id");
  });

  test("PATCH Patch Update Classe returns successful response", { tag: ["@patchUpdateClasse"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchUpdateClasse\" with id \"{STORED_CLASSE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\patch-classes-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new classe returns successful response": {"pickleLocation":"6:3","tags":["@patchUpdateClasse"]},
  "PATCH Patch Update Classe returns successful response": {"pickleLocation":"11:3","tags":["@patchUpdateClasse"]},
};