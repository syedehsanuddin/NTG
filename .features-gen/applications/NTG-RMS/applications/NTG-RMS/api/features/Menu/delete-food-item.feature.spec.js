/** Generated from: applications\NTG-RMS\api\features\Menu\delete-food-item.feature */
import { test } from "playwright-bdd";

test.describe("Delete food item (soft delete)", () => {

  test("DELETE Delete food item (soft delete) returns successful response", { tag: ["@deleteFoodItem"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteFoodItem\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-food-item.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete food item (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteFoodItem"]},
};