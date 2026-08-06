/** Generated from: applications\NTG-SMS\api\features\SettingsStatus\get-settings-status-branches-with-settings.feature */
import { test } from "playwright-bdd";

test.describe("Get Branches With Setting Settings Statu", () => {

  test("GET Get Branches With Setting Settings Statu returns successful response", { tag: ["@getBranchesWithSettingSettingsStatu"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getBranchesWithSettingSettingsStatu\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsStatus\\get-settings-status-branches-with-settings.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Branches With Setting Settings Statu returns successful response": {"pickleLocation":"6:3","tags":["@getBranchesWithSettingSettingsStatu"]},
};