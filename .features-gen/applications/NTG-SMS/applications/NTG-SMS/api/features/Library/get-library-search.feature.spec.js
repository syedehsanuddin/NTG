/** Generated from: applications\NTG-SMS\api\features\Library\get-library-search.feature */
import { test } from "playwright-bdd";

test.describe("Get Search Library", () => {

  test("GET Get Search Library returns successful response", { tag: ["@getSearchLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSearchLibrary\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\get-library-search.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Search Library returns successful response": {"pickleLocation":"6:3","tags":["@getSearchLibrary"]},
};