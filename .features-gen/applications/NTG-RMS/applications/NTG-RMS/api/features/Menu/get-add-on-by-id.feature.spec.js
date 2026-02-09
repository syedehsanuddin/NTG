/** Generated from: applications\NTG-RMS\api\features\Menu\get-add-on-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get add-on by ID", () => {

  test("GET Get add-on by ID returns successful response", { tag: ["@getAddOnById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getAddOnById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\get-add-on-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get add-on by ID returns successful response": {"pickleLocation":"6:3","tags":["@getAddOnById"]},
};