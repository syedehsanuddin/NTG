/** Generated from: applications\NTG-SMS\api\features\SettingsImport\get-settings-import-template.feature */
import { test } from "playwright-bdd";

test.describe("Get Template Settings Import", () => {

  test("GET Get Template Settings Import returns successful response", { tag: ["@getTemplateSettingsImport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTemplateSettingsImport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsImport\\get-settings-import-template.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Template Settings Import returns successful response": {"pickleLocation":"6:3","tags":["@getTemplateSettingsImport"]},
};