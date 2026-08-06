/** Generated from: applications\NTG-SMS\api\features\Application\get-sw-js.feature */
import { test } from "playwright-bdd";

test.describe("Get Sw Js", () => {

  test("GET Get Sw Js returns successful response", { tag: ["@getSwJs"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSwJs\"", null, { request });
    await Then("the response status should be 204");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Application\\get-sw-js.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Sw Js returns successful response": {"pickleLocation":"6:3","tags":["@getSwJs"]},
};