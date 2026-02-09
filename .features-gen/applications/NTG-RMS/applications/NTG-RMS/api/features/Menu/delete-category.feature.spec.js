/** Generated from: applications\NTG-RMS\api\features\Menu\delete-category.feature */
import { test } from "playwright-bdd";

test.describe("Delete category (soft delete)", () => {

  test("DELETE Delete category (soft delete) returns successful response", { tag: ["@deleteCategory"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteCategory\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-category.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete category (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteCategory"]},
};