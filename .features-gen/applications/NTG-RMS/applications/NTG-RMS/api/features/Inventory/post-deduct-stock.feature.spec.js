/** Generated from: applications\NTG-RMS\api\features\Inventory\post-deduct-stock.feature */
import { test } from "playwright-bdd";

test.describe("Deduct stock (Usage/Waste)", () => {

  test("POST Create a new ingredient returns successful response", { tag: ["@postDeductStock"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateIngredient\" with payload '{\"name\":\"{GENERATE_INGREDIENT_NAME}\",\"category\":\"other\",\"unitOfMeasurement\":\"kg\",\"currentStock\":1000000,\"minimumThreshold\":0,\"costPerUnit\":50,\"isActive\":true}' and headers \"branchId={BRANCH_ID}\"", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as ingredient id");
  });

  test("POST Deduct stock (Usage/Waste) returns successful response", { tag: ["@postDeductStock"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDeductStock\" with payload '{\"ingredientId\":\"{STORED_INGREDIENT_ID}\",\"quantity\":1,\"branchId\":\"{BRANCH_ID}\",\"reason\":\"usage\",\"referenceId\":\"\",\"transactionDate\":\"2026-02-22T11:56:49.426Z\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-deduct-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new ingredient returns successful response": {"pickleLocation":"7:3","tags":["@postDeductStock"]},
  "POST Deduct stock (Usage/Waste) returns successful response": {"pickleLocation":"13:3","tags":["@postDeductStock"]},
};