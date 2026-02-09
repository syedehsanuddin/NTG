/** Generated from: applications\NTG-RMS\api\features\Inventory\post-create-recipe.feature */
import { test } from "playwright-bdd";

test.describe("Create or update recipe for a food item", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postCreateRecipe"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"Automatest Test Ingredient\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("POST Create or update recipe for a food item returns successful response", { tag: ["@postCreateRecipe"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateRecipe\" with payload '{\"foodItemId\":\"5c61a269-be94-465c-a3a4-6ae54df068df\",\"ingredients\":[{\"ingredientId\":\"{STORED_INGREDIENT_ID}\",\"quantity\":1,\"unit\":\"kg\"}]}' and headers \"branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\"", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-create-recipe.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new ingredient returns successful response": {"pickleLocation":"7:5","tags":["@postCreateRecipe"]},
  "POST Create or update recipe for a food item returns successful response": {"pickleLocation":"12:3","tags":["@postCreateRecipe"]},
};