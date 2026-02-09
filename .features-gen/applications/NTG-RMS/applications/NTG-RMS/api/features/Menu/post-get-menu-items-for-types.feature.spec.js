/** Generated from: applications\NTG-RMS\api\features\Menu\post-get-menu-items-for-types.feature */
import { test } from "playwright-bdd";

test.describe("Get food item IDs for multiple menu types at once", () => {

  test("POST Get food item IDs for multiple menu types at once returns successful response", { tag: ["@postGetMenuItemsForTypes"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postGetMenuItemsForTypes\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\post-get-menu-items-for-types.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Get food item IDs for multiple menu types at once returns successful response": {"pickleLocation":"6:3","tags":["@postGetMenuItemsForTypes"]},
};