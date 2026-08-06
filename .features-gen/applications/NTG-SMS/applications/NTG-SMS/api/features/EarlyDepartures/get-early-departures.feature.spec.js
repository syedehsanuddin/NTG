/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\get-early-departures.feature */
import { test } from "playwright-bdd";

test.describe("Get Early Departures", () => {

  test("GET Get Early Departures returns successful response", { tag: ["@getEarlyDepartures"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getEarlyDepartures\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\get-early-departures.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Early Departures returns successful response": {"pickleLocation":"6:3","tags":["@getEarlyDepartures"]},
};