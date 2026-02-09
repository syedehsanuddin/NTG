/** Generated from: applications\NTG-RMS\api\features\Translations\get-available-languages-for-tenant.feature */
import { test } from "playwright-bdd";

test.describe("Get available languages that can be added for current tenant", () => {

  test("GET Get available languages that can be added for current tenant returns successful response", { tag: ["@getAvailableLanguagesForTenant"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAvailableLanguagesForTenant\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\get-available-languages-for-tenant.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get available languages that can be added for current tenant returns successful response": {"pickleLocation":"6:3","tags":["@getAvailableLanguagesForTenant"]},
};