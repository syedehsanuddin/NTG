/** Generated from: applications\NTG-RMS\api\features\Translations\get-translation.feature */
import { test } from "playwright-bdd";

test.describe("Get translation for a specific field in a language", () => {

  test("GET Get translation for a specific field in a language returns successful response", { tag: ["@getTranslation"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTranslation\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\get-translation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get translation for a specific field in a language returns successful response": {"pickleLocation":"6:3","tags":["@getTranslation"]},
};