/** Generated from: applications\NTG-SMS\api\features\Library\get-library.feature */
import { test } from "playwright-bdd";

test.describe("Get Library", () => {

  test("GET Get Library returns successful response", { tag: ["@getLibrary"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLibrary\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Library\\get-library.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Library returns successful response": {"pickleLocation":"6:3","tags":["@getLibrary"]},
};