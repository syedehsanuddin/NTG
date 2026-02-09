/** Generated from: applications\NTG-RMS\api\features\Menu\get-variations.feature */
import { test } from "playwright-bdd";

test.describe("Get all variations in a group", () => {

  test("GET Get all variations in a group returns successful response", { tag: ["@getVariations"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getVariations\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-variations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all variations in a group returns successful response": {"pickleLocation":"6:3","tags":["@getVariations"]},
};