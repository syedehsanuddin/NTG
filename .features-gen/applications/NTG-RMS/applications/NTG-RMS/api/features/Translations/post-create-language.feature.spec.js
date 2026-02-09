/** Generated from: applications\NTG-RMS\api\features\Translations\post-create-language.feature */
import { test } from "playwright-bdd";

test.describe("Create a new supported language (Admin only)", () => {

  test("POST Create a new supported language (Admin only) returns successful response", { tag: ["@postCreateLanguage"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateLanguage\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\post-create-language.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new supported language (Admin only) returns successful response": {"pickleLocation":"6:3","tags":["@postCreateLanguage"]},
};