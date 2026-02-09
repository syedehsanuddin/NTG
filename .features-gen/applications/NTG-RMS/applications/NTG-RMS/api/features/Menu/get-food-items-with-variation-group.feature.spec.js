/** Generated from: applications\NTG-RMS\api\features\Menu\get-food-items-with-variation-group.feature */
import { test } from "playwright-bdd";

test.describe("Get food items that use this variation group", () => {

  test("GET Get food items that use this variation group returns successful response", { tag: ["@getFoodItemsWithVariationGroup"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getFoodItemsWithVariationGroup\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-food-items-with-variation-group.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get food items that use this variation group returns successful response": {"pickleLocation":"6:3","tags":["@getFoodItemsWithVariationGroup"]},
};