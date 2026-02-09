/** Generated from: applications\NTG-RMS\api\features\Menu\post-create-food-item.feature */
import { test } from "playwright-bdd";

test.describe("Create a new food item", () => {

  test("POST Create a new food item returns successful response", { tag: ["@postCreateFoodItem"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateFoodItem\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-create-food-item.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new food item returns successful response": {"pickleLocation":"6:3","tags":["@postCreateFoodItem"]},
};