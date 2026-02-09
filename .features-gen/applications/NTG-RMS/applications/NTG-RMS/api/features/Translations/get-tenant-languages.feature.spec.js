/** Generated from: applications\NTG-RMS\api\features\Translations\get-tenant-languages.feature */
import { test } from "playwright-bdd";

test.describe("Get enabled languages for current tenant", () => {

  test("GET Get enabled languages for current tenant returns successful response", { tag: ["@getTenantLanguages"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTenantLanguages\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\get-tenant-languages.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get enabled languages for current tenant returns successful response": {"pickleLocation":"6:3","tags":["@getTenantLanguages"]},
};