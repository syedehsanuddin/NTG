/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-branches-by-id-storage.feature */
import { test } from "playwright-bdd";

test.describe("Get Storage Branche By Id", () => {

  test("GET Get Storage Branche By Id returns successful response", { tag: ["@getStorageBrancheById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStorageBrancheById\" with id \"{STORED_STORAGE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-branches-by-id-storage.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Storage Branche By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStorageBrancheById"]},
};