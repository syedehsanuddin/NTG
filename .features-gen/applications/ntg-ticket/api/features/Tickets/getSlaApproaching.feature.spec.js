/** Generated from: applications\ntg-ticket\api\features\Tickets\getSlaApproaching.feature */
import { test } from "playwright-bdd";

test.describe("Get SLA Approaching Tickets API Validation", () => {

  test("GET SLA Approaching Tickets returns successful response", { tag: ["@getSlaApproaching", "@regression"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getSlaApproaching\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
    await And("the response should have field \"message\"");
    await And("the response should be a valid JSON array");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\ntg-ticket\\api\\features\\Tickets\\getSlaApproaching.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET SLA Approaching Tickets returns successful response": {"pickleLocation":"6:3","tags":["@getSlaApproaching","@regression"]},
};