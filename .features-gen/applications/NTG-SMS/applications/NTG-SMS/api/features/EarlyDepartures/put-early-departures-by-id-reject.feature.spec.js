/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\put-early-departures-by-id-reject.feature */
import { test } from "playwright-bdd";

test.describe("Put Reject Early Departure", () => {

  test("PUT Put Reject Early Departure returns successful response", { tag: ["@putRejectEarlyDeparture"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putRejectEarlyDeparture\" with id \"{STORED_REJECT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\put-early-departures-by-id-reject.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Reject Early Departure returns successful response": {"pickleLocation":"6:3","tags":["@putRejectEarlyDeparture"]},
};