/** Generated from: applications\NTG-RMS\api\features\Inventory\get-recipe-by-food-item-id.feature */
import { test } from "playwright-bdd";

test.describe("Get recipe by food item ID", () => {

  test("GET Get recipe by food item ID returns successful response", { tag: ["@getRecipeByFoodItemId"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getRecipeByFoodItemId\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\get-recipe-by-food-item-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get recipe by food item ID returns successful response": {"pickleLocation":"6:3","tags":["@getRecipeByFoodItemId"]},
};