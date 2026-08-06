/** Generated from: applications\NTG-SMS\api\features\Application\get-health.feature */
import { test } from "playwright-bdd";

test.describe("Get Health", () => {

  test("GET Get Health returns successful response", { tag: ["@getHealth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getHealth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Application\\get-health.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Health returns successful response": {"pickleLocation":"6:3","tags":["@getHealth"]},
};