/** Generated from: applications\NTG-RMS\api\features\Menu\put-update-combo-meal.feature */
import { test } from "playwright-bdd";

test.describe("Update combo meal", () => {

  test("PUT Update combo meal returns successful response", { tag: ["@putUpdateComboMeal"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateComboMeal\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\put-update-combo-meal.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update combo meal returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateComboMeal"]},
};