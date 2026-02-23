/** Generated from: applications\NTG-RMS\api\features\Inventory\post-create-ingredient.feature */
import { test } from "playwright-bdd";

test.describe("Create a new ingredient", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postCreateIngredient"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"{GENERATE_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId={BRANCH_ID}\"", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-create-ingredient.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new ingredient returns successful response": {"pickleLocation":"6:3","tags":["@postCreateIngredient"]},
};