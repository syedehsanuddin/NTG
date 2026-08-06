/** Generated from: applications\NTG-SMS\api\features\SettingsStatus\post-settings-status-copy-from-branch.feature */
import { test } from "playwright-bdd";

test.describe("Post Copy From Branch Settings Statu", () => {

  test("POST Post Copy From Branch Settings Statu returns successful response", { tag: ["@postCopyFromBranchSettingsStatu"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCopyFromBranchSettingsStatu\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SettingsStatus\\post-settings-status-copy-from-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Copy From Branch Settings Statu returns successful response": {"pickleLocation":"6:3","tags":["@postCopyFromBranchSettingsStatu"]},
};