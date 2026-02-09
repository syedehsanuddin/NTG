/** Generated from: applications\NTG-RMS\api\features\Translations\post-clear-expired-cache.feature */
import { test } from "playwright-bdd";

test.describe("Clear expired translation cache entries", () => {

  test("POST Clear expired translation cache entries returns successful response", { tag: ["@postClearExpiredCache"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postClearExpiredCache\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Translations\\post-clear-expired-cache.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Clear expired translation cache entries returns successful response": {"pickleLocation":"6:3","tags":["@postClearExpiredCache"]},
};