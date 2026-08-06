/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\get-early-departures-check-conflict.feature */
import { test } from "playwright-bdd";

test.describe("Get Check Conflict Early Departure", () => {

  test("GET Get Check Conflict Early Departure returns successful response", { tag: ["@getCheckConflictEarlyDeparture"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getCheckConflictEarlyDeparture\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\get-early-departures-check-conflict.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Check Conflict Early Departure returns successful response": {"pickleLocation":"6:3","tags":["@getCheckConflictEarlyDeparture"]},
};