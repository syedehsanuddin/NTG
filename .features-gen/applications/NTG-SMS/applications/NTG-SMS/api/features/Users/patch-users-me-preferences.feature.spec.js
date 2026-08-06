/** Generated from: applications\NTG-SMS\api\features\Users\patch-users-me-preferences.feature */
import { test } from "playwright-bdd";

test.describe("Patch Me Preference User", () => {

  test("PATCH Patch Me Preference User returns successful response", { tag: ["@patchMePreferenceUser"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchMePreferenceUser\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Users\\patch-users-me-preferences.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Me Preference User returns successful response": {"pickleLocation":"6:3","tags":["@patchMePreferenceUser"]},
};