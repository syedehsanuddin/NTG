/** Generated from: applications\NTG-SMS\api\features\Storage\get-storage-breakdown.feature */
import { test } from "playwright-bdd";

test.describe("Get Breakdown Storage", () => {

  test("GET Get Breakdown Storage returns successful response", { tag: ["@getBreakdownStorage"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getBreakdownStorage\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Storage\\get-storage-breakdown.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Breakdown Storage returns successful response": {"pickleLocation":"6:3","tags":["@getBreakdownStorage"]},
};