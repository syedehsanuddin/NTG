/** Generated from: applications\NTG-SMS\api\features\Events\post-events-by-id-consent.feature */
import { test } from "playwright-bdd";

test.describe("Post Consent Event", () => {

  test("POST Post Consent Event returns successful response", { tag: ["@postConsentEvent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postConsentEvent\" with id \"{STORED_CONSENT_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\post-events-by-id-consent.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Consent Event returns successful response": {"pickleLocation":"6:3","tags":["@postConsentEvent"]},
};