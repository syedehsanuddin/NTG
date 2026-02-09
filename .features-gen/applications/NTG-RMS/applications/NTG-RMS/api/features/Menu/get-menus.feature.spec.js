/** Generated from: applications\NTG-RMS\api\features\Menu\get-menus.feature */
import { test } from "playwright-bdd";

test.describe("Get all menus (grouped by menu type)", () => {

  test("GET Get all menus (grouped by menu type) returns successful response", { tag: ["@getMenus"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getMenus\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-menus.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all menus (grouped by menu type) returns successful response": {"pickleLocation":"6:3","tags":["@getMenus"]},
};