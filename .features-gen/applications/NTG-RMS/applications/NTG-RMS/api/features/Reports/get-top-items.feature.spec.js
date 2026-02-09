/** Generated from: applications\NTG-RMS\api\features\Reports\get-top-items.feature */
import { test } from "playwright-bdd";

test.describe("Get top selling items", () => {

  test("GET Get top selling items returns successful response", { tag: ["@getTopItems"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTopItems\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Reports\\get-top-items.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get top selling items returns successful response": {"pickleLocation":"6:3","tags":["@getTopItems"]},
};