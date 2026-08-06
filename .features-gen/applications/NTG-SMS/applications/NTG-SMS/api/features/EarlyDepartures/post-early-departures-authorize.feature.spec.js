/** Generated from: applications\NTG-SMS\api\features\EarlyDepartures\post-early-departures-authorize.feature */
import { test } from "playwright-bdd";

test.describe("Post Authorize Early Departure", () => {

  test("POST Post Authorize Early Departure returns successful response", { tag: ["@postAuthorizeEarlyDeparture"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAuthorizeEarlyDeparture\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\EarlyDepartures\\post-early-departures-authorize.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Authorize Early Departure returns successful response": {"pickleLocation":"6:3","tags":["@postAuthorizeEarlyDeparture"]},
};