/** Generated from: applications\NTG-RMS\api\features\Sync\post-resolve-conflicts.feature */
import { test } from "playwright-bdd";

test.describe("Resolve sync conflicts", () => {

  test("POST Resolve sync conflicts returns successful response", { tag: ["@postResolveConflicts"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postResolveConflicts\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Sync\\post-resolve-conflicts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Resolve sync conflicts returns successful response": {"pickleLocation":"6:3","tags":["@postResolveConflicts"]},
};