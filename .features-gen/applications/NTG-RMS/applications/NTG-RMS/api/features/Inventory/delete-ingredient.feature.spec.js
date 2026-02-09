/** Generated from: applications\NTG-RMS\api\features\Inventory\delete-ingredient.feature */
import { test } from "playwright-bdd";

test.describe("Delete an ingredient (soft delete)", () => {

  test("DELETE Delete an ingredient (soft delete) returns successful response", { tag: ["@deleteIngredient"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteIngredient\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\delete-ingredient.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete an ingredient (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteIngredient"]},
};