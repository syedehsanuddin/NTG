/** Generated from: applications\NTG-RMS\api\features\Settings\get-setting-category.feature */
import { test } from "playwright-bdd";

test.describe("Get a specific settings category", () => {

  test("GET Get a specific settings category returns successful response", { tag: ["@getSettingCategory"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSettingCategory\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Settings\\get-setting-category.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get a specific settings category returns successful response": {"pickleLocation":"6:3","tags":["@getSettingCategory"]},
};