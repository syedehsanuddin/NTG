/** Generated from: applications\NTG-SMS\api\features\Invitations\post-invitations-setup-by-token.feature */
import { test } from "playwright-bdd";

test.describe("Post Setup Invitation", () => {

  test("POST Post Setup Invitation returns successful response", { tag: ["@postSetupInvitation"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSetupInvitation\" with id \"{STORED_SETUP_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Invitations\\post-invitations-setup-by-token.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Setup Invitation returns successful response": {"pickleLocation":"6:3","tags":["@postSetupInvitation"]},
};