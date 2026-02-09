/** Generated from: applications\NTG-RMS\api\features\Sync\post-push-sync.feature */
import { test } from "playwright-bdd";

test.describe("Push local changes to server", () => {

  test("POST Push local changes to server returns successful response", { tag: ["@postPushSync"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postPushSync\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Sync\\post-push-sync.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Push local changes to server returns successful response": {"pickleLocation":"6:3","tags":["@postPushSync"]},
};