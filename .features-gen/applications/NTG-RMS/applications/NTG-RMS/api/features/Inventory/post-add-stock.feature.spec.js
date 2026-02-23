/** Generated from: applications\NTG-RMS\api\features\Inventory\post-add-stock.feature */
import { test } from "playwright-bdd";

test.describe("Add stock (Purchase Entry)", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postAddStock", "@happyFlow"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"{GENERATE_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId={BRANCH_ID}\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("POST Add stock (Purchase Entry) returns successful response", { tag: ["@postAddStock", "@happyFlow"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAddStock\" with payload '{\"ingredientId\":\"{STORED_INGREDIENT_ID}\",\"quantity\":1,\"unitCost\":1,\"branchId\":\"{BRANCH_ID}\",\"supplierName\":\"Automatest Test Ingredient \",\"invoiceNumber\":\"Automatest Test Ingredient \",\"reason\":\"Automatest Test Ingredient \",\"transactionDate\":\"2026-01-01T10:13:47.470Z\"}' and headers \"language=en\"", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-add-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new ingredient returns successful response": {"pickleLocation":"7:3","tags":["@postAddStock","@happyFlow"]},
  "POST Add stock (Purchase Entry) returns successful response": {"pickleLocation":"14:3","tags":["@postAddStock","@happyFlow"]},
};