/** Generated from: applications\NTG-RMS\api\features\Inventory\post-create-recipe.feature */
import { test } from "playwright-bdd";

test.describe("Create or update recipe for a food item", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postCreateRecipe"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"{GENERATE_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId={BRANCH_ID}\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("POST Create recipe for a food item returns successful response", { tag: ["@postCreateRecipe"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateRecipe\" with payload '{\"foodItemId\":\"5d289869-4fde-4a84-aedb-a53e600850cd\",\"ingredients\":[{\"ingredientId\":\"{STORED_INGREDIENT_ID}\",\"quantity\":1,\"unit\":\"kg\"}]}' and headers \"branchId={BRANCH_ID}\"", null, { request });
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
  "POST Create recipe for a food item returns successful response": {"pickleLocation":"12:3","tags":["@postCreateRecipe"]},
};