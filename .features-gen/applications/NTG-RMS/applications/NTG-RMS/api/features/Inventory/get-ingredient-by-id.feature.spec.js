/** Generated from: applications\NTG-RMS\api\features\Inventory\get-ingredient-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get ingredient by ID", () => {

  test("GET Get ingredient by ID returns successful response", { tag: ["@getIngredientById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getIngredientById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\get-ingredient-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get ingredient by ID returns successful response": {"pickleLocation":"6:3","tags":["@getIngredientById"]},
};