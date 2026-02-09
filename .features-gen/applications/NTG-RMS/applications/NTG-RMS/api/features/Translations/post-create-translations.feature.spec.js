/** Generated from: applications\NTG-RMS\api\features\Translations\post-create-translations.feature */
import { test } from "playwright-bdd";

test.describe("Create translations for an entity field", () => {

  test("POST Create translations for an entity field returns successful response", { tag: ["@postCreateTranslations"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateTranslations\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\post-create-translations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create translations for an entity field returns successful response": {"pickleLocation":"6:3","tags":["@postCreateTranslations"]},
};