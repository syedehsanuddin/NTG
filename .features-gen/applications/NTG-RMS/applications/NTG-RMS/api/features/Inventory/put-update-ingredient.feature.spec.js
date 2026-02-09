/** Generated from: applications\NTG-RMS\api\features\Inventory\put-update-ingredient.feature */
import { test } from "playwright-bdd";

test.describe("Update an ingredient", () => {

  test("PUT Update an ingredient returns successful response", { tag: ["@putUpdateIngredient"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateIngredient\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\put-update-ingredient.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update an ingredient returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateIngredient"]},
};