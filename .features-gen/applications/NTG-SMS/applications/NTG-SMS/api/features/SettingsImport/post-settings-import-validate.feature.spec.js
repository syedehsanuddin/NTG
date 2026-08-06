/** Generated from: applications\NTG-SMS\api\features\SettingsImport\post-settings-import-validate.feature */
import { test } from "playwright-bdd";

test.describe("Post Validate Settings Import", () => {

  test("POST Post Validate Settings Import returns successful response", { tag: ["@postValidateSettingsImport"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postValidateSettingsImport\" with payload '{\"file\":\"string\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsImport\\post-settings-import-validate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Validate Settings Import returns successful response": {"pickleLocation":"6:3","tags":["@postValidateSettingsImport"]},
};