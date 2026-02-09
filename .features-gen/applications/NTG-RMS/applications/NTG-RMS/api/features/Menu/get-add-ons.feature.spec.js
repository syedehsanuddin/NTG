/** Generated from: applications\NTG-RMS\api\features\Menu\get-add-ons.feature */
import { test } from "playwright-bdd";

test.describe("Get all add-ons in a group", () => {

  test("GET Get all add-ons in a group returns successful response", { tag: ["@getAddOns"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAddOns\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-add-ons.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all add-ons in a group returns successful response": {"pickleLocation":"6:3","tags":["@getAddOns"]},
};