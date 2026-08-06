/** Generated from: applications\NTG-SMS\api\features\RolesPermissions\get-features.feature */
import { test } from "playwright-bdd";

test.describe("Get Features", () => {

  test("GET Get Features returns successful response", { tag: ["@getFeatures"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getFeatures\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\RolesPermissions\\get-features.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Features returns successful response": {"pickleLocation":"6:3","tags":["@getFeatures"]},
};