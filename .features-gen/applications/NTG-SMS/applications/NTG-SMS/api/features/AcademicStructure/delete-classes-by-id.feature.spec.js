/** Generated from: applications\NTG-SMS\api\features\AcademicStructure\delete-classes-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Classe", () => {

  test("POST Create a new classe returns successful response", { tag: ["@deleteClasse"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateClasse\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as classe id");
  });

  test("DELETE Delete Classe returns successful response", { tag: ["@deleteClasse"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteClasse\" with id \"{STORED_CLASSE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicStructure\\delete-classes-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new classe returns successful response": {"pickleLocation":"6:3","tags":["@deleteClasse"]},
  "DELETE Delete Classe returns successful response": {"pickleLocation":"11:3","tags":["@deleteClasse"]},
};