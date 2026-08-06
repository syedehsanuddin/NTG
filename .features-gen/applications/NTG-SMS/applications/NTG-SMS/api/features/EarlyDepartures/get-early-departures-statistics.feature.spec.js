/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\get-early-departures-statistics.feature */
import { test } from "playwright-bdd";

test.describe("Get Statistic Early Departure", () => {

  test("GET Get Statistic Early Departure returns successful response", { tag: ["@getStatisticEarlyDeparture"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatisticEarlyDeparture\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\get-early-departures-statistics.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Statistic Early Departure returns successful response": {"pickleLocation":"6:3","tags":["@getStatisticEarlyDeparture"]},
};