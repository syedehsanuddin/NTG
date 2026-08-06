/** Generated from: applications\NTG-SMS\api\features\SettingsStatus\get-settings-status-status.feature */
import { test } from "playwright-bdd";

test.describe("Get Statu Settings Statu", () => {

  test("GET Get Statu Settings Statu returns successful response", { tag: ["@getStatuSettingsStatu"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatuSettingsStatu\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsStatus\\get-settings-status-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Statu Settings Statu returns successful response": {"pickleLocation":"6:3","tags":["@getStatuSettingsStatu"]},
};