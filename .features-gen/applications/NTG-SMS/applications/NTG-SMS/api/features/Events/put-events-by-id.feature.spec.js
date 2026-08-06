/** Generated from: applications\NTG-SMS\api\features\Events\put-events-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Event", () => {

  test("POST Create a new event returns successful response", { tag: ["@putUpdateEvent"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEvent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as event id");
  });

  test("PUT Put Update Event returns successful response", { tag: ["@putUpdateEvent"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateEvent\" with id \"{STORED_EVENT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\put-events-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new event returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateEvent"]},
  "PUT Put Update Event returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateEvent"]},
};