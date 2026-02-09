/** Generated from: applications\NTG-RMS\api\features\Menu\post-assign-items-to-menu.feature */
import { test } from "playwright-bdd";

test.describe("Assign food items to a menu", () => {

  test("POST Assign food items to a menu returns successful response", { tag: ["@postAssignItemsToMenu"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postAssignItemsToMenu\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-assign-items-to-menu.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Assign food items to a menu returns successful response": {"pickleLocation":"6:3","tags":["@postAssignItemsToMenu"]},
};