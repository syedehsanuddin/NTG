/** Generated from: applications\NTG-SMS\api\features\Events\get-events.feature */
import { test } from "playwright-bdd";

test.describe("Get Events", () => {

  test("GET Get Events returns successful response", { tag: ["@getEvents"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getEvents\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Events returns successful response": {"pickleLocation":"6:3","tags":["@getEvents"]},
};