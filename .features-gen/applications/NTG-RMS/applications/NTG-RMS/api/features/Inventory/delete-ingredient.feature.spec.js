/** Generated from: applications\NTG-RMS\api\features\Inventory\delete-ingredient.feature */
import { test } from "playwright-bdd";

test.describe("Delete an ingredient (soft delete)", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@deleteIngredient", "@12345"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"{GENERATE_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId={BRANCH_ID}\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("PUT Update an ingredient returns successful response", { tag: ["@deleteIngredient", "@12345"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateIngredient\" with id \"{STORED_INGREDIENT_ID}\" and payload '{\"name\":\"UPDATED - {STORED_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":3,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}'", null, { request });
    await Then("the response status should be 200");
  });

  test("DELETE Delete an ingredient (soft delete) returns successful response", { tag: ["@deleteIngredient", "@12345"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteIngredient\" with id \"{STORED_INGREDIENT_ID}\"", null, { request });
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
  "POST Create a new ingredient returns successful response": {"pickleLocation":"7:3","tags":["@deleteIngredient","@12345"]},
  "PUT Update an ingredient returns successful response": {"pickleLocation":"12:3","tags":["@deleteIngredient","@12345"]},
  "DELETE Delete an ingredient (soft delete) returns successful response": {"pickleLocation":"16:3","tags":["@deleteIngredient","@12345"]},
};