/** Generated from: applications\NTG-RMS\api\features\Menu\post-create-combo-meal.feature */
import { test } from "playwright-bdd";

test.describe("Create a new combo meal", () => {

  test("POST Create a new combo meal returns successful response", { tag: ["@postCreateComboMeal"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateComboMeal\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-create-combo-meal.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new combo meal returns successful response": {"pickleLocation":"6:3","tags":["@postCreateComboMeal"]},
};