/** Generated from: applications\NTG-SMS\api\features\Events\get-events-my-events.feature */
import { test } from "playwright-bdd";

test.describe("Get My Event Event", () => {

  test("GET Get My Event Event returns successful response", { tag: ["@getMyEventEvent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMyEventEvent\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events-my-events.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get My Event Event returns successful response": {"pickleLocation":"6:3","tags":["@getMyEventEvent"]},
};