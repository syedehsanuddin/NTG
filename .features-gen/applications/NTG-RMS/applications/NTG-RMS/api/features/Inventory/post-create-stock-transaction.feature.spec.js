/** Generated from: applications\NTG-RMS\api\features\Inventory\post-create-stock-transaction.feature */
import { test } from "playwright-bdd";

test.describe("Create a stock transaction (legacy)", () => {

  test("POST Create a stock transaction (legacy) returns successful response", { tag: ["@postCreateStockTransaction"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateStockTransaction\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-create-stock-transaction.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a stock transaction (legacy) returns successful response": {"pickleLocation":"6:3","tags":["@postCreateStockTransaction"]},
};