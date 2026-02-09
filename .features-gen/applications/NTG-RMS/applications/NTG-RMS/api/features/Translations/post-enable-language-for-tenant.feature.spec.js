/** Generated from: applications\NTG-RMS\api\features\Translations\post-enable-language-for-tenant.feature */
import { test } from "playwright-bdd";

test.describe("Enable a language for current tenant and translate existing data", () => {

  test("POST Enable a language for current tenant and translate existing data returns successful response", { tag: ["@postEnableLanguageForTenant"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postEnableLanguageForTenant\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\post-enable-language-for-tenant.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Enable a language for current tenant and translate existing data returns successful response": {"pickleLocation":"6:3","tags":["@postEnableLanguageForTenant"]},
};