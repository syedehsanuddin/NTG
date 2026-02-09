/** Generated from: applications\NTG-RMS\api\features\Sync\get-sync-status.feature */
import { test } from "playwright-bdd";

test.describe("Get sync status", () => {

  test("GET Get sync status returns successful response", { tag: ["@getSyncStatus"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSyncStatus\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Sync\\get-sync-status.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get sync status returns successful response": {"pickleLocation":"6:3","tags":["@getSyncStatus"]},
};