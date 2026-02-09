/** Generated from: applications\NTG-RMS\api\features\Inventory\post-adjust-stock.feature */
import { test } from "playwright-bdd";

test.describe("Adjust stock (Physical count correction)", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postAdjustStock"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"Automatest Test Ingredient\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("POST Adjust stock (Physical count correction) returns successful response", { tag: ["@postAdjustStock"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAdjustStock\" with payload '{\"ingredientId\":\"{STORED_INGREDIENT_ID}\",\"newQuantity\":5000000,\"branchId\":\"bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\",\"reason\":\"Automated Test \",\"transactionDate\":\"2026-01-28T10:38:41.244Z\"}' and headers \"language=en\"", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-adjust-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new ingredient returns successful response": {"pickleLocation":"6:5","tags":["@postAdjustStock"]},
  "POST Adjust stock (Physical count correction) returns successful response": {"pickleLocation":"12:3","tags":["@postAdjustStock"]},
};