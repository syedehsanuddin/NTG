/** Generated from: applications\NTG-SMS\api\features\Library\get-library-categories.feature */
import { test } from "playwright-bdd";

test.describe("Get Category Library", () => {

  test("GET Get Category Library returns successful response", { tag: ["@getCategoryLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getCategoryLibrary\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\get-library-categories.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Category Library returns successful response": {"pickleLocation":"6:3","tags":["@getCategoryLibrary"]},
};