/** Generated from: applications\NTG-RMS\api\features\Translations\get-entity-translations.feature */
import { test } from "playwright-bdd";

test.describe("Get all translations for an entity", () => {

  test("GET Get all translations for an entity returns successful response", { tag: ["@getEntityTranslations"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getEntityTranslations\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\get-entity-translations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all translations for an entity returns successful response": {"pickleLocation":"6:3","tags":["@getEntityTranslations"]},
};