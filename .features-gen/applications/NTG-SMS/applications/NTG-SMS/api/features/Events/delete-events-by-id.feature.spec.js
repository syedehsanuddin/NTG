/** Generated from: applications\NTG-SMS\api\features\Events\delete-events-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Event", () => {

  test("POST Create a new event returns successful response", { tag: ["@deleteEvent"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEvent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as event id");
  });

  test("DELETE Delete Event returns successful response", { tag: ["@deleteEvent"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteEvent\" with id \"{STORED_EVENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\delete-events-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new event returns successful response": {"pickleLocation":"6:3","tags":["@deleteEvent"]},
  "DELETE Delete Event returns successful response": {"pickleLocation":"11:3","tags":["@deleteEvent"]},
};