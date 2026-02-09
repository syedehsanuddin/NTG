/** Generated from: applications\NTG-RMS\api\features\Translations\put-update-language.feature */
import { test } from "playwright-bdd";

test.describe("Update a supported language (Admin only)", () => {

  test("PUT Update a supported language (Admin only) returns successful response", { tag: ["@putUpdateLanguage"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateLanguage\" with payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\put-update-language.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update a supported language (Admin only) returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateLanguage"]},
};