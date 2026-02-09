/** Generated from: applications\NTG-RMS\api\features\Menu\get-menu-items.feature */
import { test } from "playwright-bdd";

test.describe("Get food items in a menu", () => {

  test("GET Get food items in a menu returns successful response", { tag: ["@getMenuItems"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMenuItems\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-menu-items.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get food items in a menu returns successful response": {"pickleLocation":"6:3","tags":["@getMenuItems"]},
};