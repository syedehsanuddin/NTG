/** Generated from: applications\NTG-SMS\api\features\Invitations\get-invitations-setup-by-token.feature */
import { test } from "playwright-bdd";

test.describe("Get Setup Invitation", () => {

  test("GET Get Setup Invitation returns successful response", { tag: ["@getSetupInvitation"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSetupInvitation\" with id \"{STORED_SETUP_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Invitations\\get-invitations-setup-by-token.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Setup Invitation returns successful response": {"pickleLocation":"6:3","tags":["@getSetupInvitation"]},
};