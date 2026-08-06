/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\put-early-departures-by-id-cancel.feature */
import { test } from "playwright-bdd";

test.describe("Put Cancel Early Departure", () => {

  test("PUT Put Cancel Early Departure returns successful response", { tag: ["@putCancelEarlyDeparture"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putCancelEarlyDeparture\" with id \"{STORED_CANCEL_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\put-early-departures-by-id-cancel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Cancel Early Departure returns successful response": {"pickleLocation":"6:3","tags":["@putCancelEarlyDeparture"]},
};