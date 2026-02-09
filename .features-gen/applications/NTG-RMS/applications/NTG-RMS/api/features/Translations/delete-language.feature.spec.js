/** Generated from: applications\NTG-RMS\api\features\Translations\delete-language.feature */
import { test } from "playwright-bdd";

test.describe("Delete a language (soft delete - Admin only)", () => {

  test("DELETE Delete a language (soft delete - Admin only) returns successful response", { tag: ["@deleteLanguage"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteLanguage\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\delete-language.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a language (soft delete - Admin only) returns successful response": {"pickleLocation":"6:3","tags":["@deleteLanguage"]},
};