/** Generated from: applications\NTG-SMS\api\features\Events\get-events-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Event By Id", () => {

  test("POST Create a new event returns successful response", { tag: ["@getEventById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEvent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as event id");
  });

  test("GET Get Event By Id returns successful response", { tag: ["@getEventById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getEventById\" with id \"{STORED_EVENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new event returns successful response": {"pickleLocation":"6:3","tags":["@getEventById"]},
  "GET Get Event By Id returns successful response": {"pickleLocation":"11:3","tags":["@getEventById"]},
};