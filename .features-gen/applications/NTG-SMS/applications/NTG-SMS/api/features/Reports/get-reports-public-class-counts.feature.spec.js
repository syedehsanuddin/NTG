/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-public-class-counts.feature */
import { test } from "playwright-bdd";

test.describe("Get Public Class Count Report", () => {

  test("GET Get Public Class Count Report returns successful response", { tag: ["@getPublicClassCountReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPublicClassCountReport\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-public-class-counts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Public Class Count Report returns successful response": {"pickleLocation":"6:3","tags":["@getPublicClassCountReport"]},
};