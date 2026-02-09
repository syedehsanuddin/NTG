/** Generated from: applications\NTG-RMS\api\features\Menu\delete-combo-meal.feature */
import { test } from "playwright-bdd";

test.describe("Delete combo meal (soft delete)", () => {

  test("DELETE Delete combo meal (soft delete) returns successful response", { tag: ["@deleteComboMeal"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteComboMeal\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-combo-meal.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete combo meal (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteComboMeal"]},
};