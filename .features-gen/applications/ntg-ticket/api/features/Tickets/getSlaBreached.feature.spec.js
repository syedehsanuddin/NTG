/** Generated from: applications\ntg-ticket\api\features\Tickets\getSlaBreached.feature */
import { test } from "playwright-bdd";

test.describe("Get SLA Breached Tickets API Validation", () => {

  test("GET SLA Breached Tickets returns successful response", { tag: ["@getSlaBreached"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSlaBreached\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response should be a valid JSON array");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getSlaBreached.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET SLA Breached Tickets returns successful response": {"pickleLocation":"6:3","tags":["@getSlaBreached"]},
};