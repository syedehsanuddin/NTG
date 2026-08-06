/** Generated from: applications\NTG-SMS\api\features\SystemSettings\get-settings.feature */
import { test } from "playwright-bdd";

test.describe("Get Settings", () => {

  test("GET Get Settings returns successful response", { tag: ["@getSettings"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSettings\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\SystemSettings\\get-settings.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Settings returns successful response": {"pickleLocation":"6:3","tags":["@getSettings"]},
};