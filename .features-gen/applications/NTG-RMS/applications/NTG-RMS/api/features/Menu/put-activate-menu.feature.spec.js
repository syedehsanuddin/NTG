/** Generated from: applications\NTG-RMS\api\features\Menu\put-activate-menu.feature */
import { test } from "playwright-bdd";

test.describe("Activate or deactivate a menu", () => {

  test("PUT Activate or deactivate a menu returns successful response", { tag: ["@putActivateMenu"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putActivateMenu\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\put-activate-menu.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Activate or deactivate a menu returns successful response": {"pickleLocation":"6:3","tags":["@putActivateMenu"]},
};