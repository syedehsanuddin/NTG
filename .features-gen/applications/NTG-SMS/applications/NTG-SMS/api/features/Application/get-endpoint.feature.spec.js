/** Generated from: applications\NTG-SMS\api\features\Application\get-endpoint.feature */
import { test } from "playwright-bdd";

test.describe("Get Resource", () => {

  test("GET Get Resource returns successful response", { tag: ["@getResource"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getResource\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Application\\get-endpoint.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Resource returns successful response": {"pickleLocation":"6:3","tags":["@getResource"]},
};