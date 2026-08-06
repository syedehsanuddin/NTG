/** Generated from: applications\NTG-SMS\api\features\Events\get-events-by-id-consents.feature */
import { test } from "playwright-bdd";

test.describe("Get Consent Event By Id", () => {

  test("GET Get Consent Event By Id returns successful response", { tag: ["@getConsentEventById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getConsentEventById\" with id \"{STORED_CONSENT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events-by-id-consents.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Consent Event By Id returns successful response": {"pickleLocation":"6:3","tags":["@getConsentEventById"]},
};