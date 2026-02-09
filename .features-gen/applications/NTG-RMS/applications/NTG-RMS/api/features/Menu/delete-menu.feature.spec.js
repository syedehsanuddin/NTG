/** Generated from: applications\NTG-RMS\api\features\Menu\delete-menu.feature */
import { test } from "playwright-bdd";

test.describe("Delete a menu type", () => {

  test("DELETE Delete a menu type returns successful response", { tag: ["@deleteMenu"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteMenu\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-menu.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a menu type returns successful response": {"pickleLocation":"6:3","tags":["@deleteMenu"]},
};