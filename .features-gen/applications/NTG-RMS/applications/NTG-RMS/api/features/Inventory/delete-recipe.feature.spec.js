/** Generated from: applications\NTG-RMS\api\features\Inventory\delete-recipe.feature */
import { test } from "playwright-bdd";

test.describe("Delete recipe for a food item", () => {

  test("DELETE Delete recipe for a food item returns successful response", { tag: ["@deleteRecipe"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteRecipe\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\delete-recipe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete recipe for a food item returns successful response": {"pickleLocation":"6:3","tags":["@deleteRecipe"]},
};