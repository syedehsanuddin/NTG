/** Generated from: applications\NTG-RMS\api\features\Settings\put-update-settings.feature */
import { test } from "playwright-bdd";

test.describe("Update settings", () => {

  test("PUT Update settings returns successful response", { tag: ["@putUpdateSettings"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateSettings\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Settings\\put-update-settings.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update settings returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateSettings"]},
};