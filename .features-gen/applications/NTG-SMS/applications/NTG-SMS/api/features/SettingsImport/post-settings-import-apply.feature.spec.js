/** Generated from: applications\NTG-SMS\api\features\SettingsImport\post-settings-import-apply.feature */
import { test } from "playwright-bdd";

test.describe("Post Apply Settings Import", () => {

  test("POST Post Apply Settings Import returns successful response", { tag: ["@postApplySettingsImport"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postApplySettingsImport\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsImport\\post-settings-import-apply.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Apply Settings Import returns successful response": {"pickleLocation":"6:3","tags":["@postApplySettingsImport"]},
};