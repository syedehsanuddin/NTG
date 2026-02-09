/** Generated from: applications\NTG-RMS\api\features\Translations\get-all-languages-admin.feature */
import { test } from "playwright-bdd";

test.describe("Get all languages including inactive (Admin only)", () => {

  test("GET Get all languages including inactive (Admin only) returns successful response", { tag: ["@getAllLanguagesAdmin"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAllLanguagesAdmin\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\get-all-languages-admin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all languages including inactive (Admin only) returns successful response": {"pickleLocation":"6:3","tags":["@getAllLanguagesAdmin"]},
};