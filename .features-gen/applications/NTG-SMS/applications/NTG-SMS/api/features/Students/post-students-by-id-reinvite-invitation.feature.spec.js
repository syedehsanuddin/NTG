/** Generated from: applications\NTG-SMS\api\features\Students\post-students-by-id-reinvite-invitation.feature */
import { test } from "playwright-bdd";

test.describe("Post Reinvite Invitation Student", () => {

  test("POST Post Reinvite Invitation Student returns successful response", { tag: ["@postReinviteInvitationStudent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postReinviteInvitationStudent\" with id \"{STORED_REINVITEINVITATION_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\post-students-by-id-reinvite-invitation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Reinvite Invitation Student returns successful response": {"pickleLocation":"6:3","tags":["@postReinviteInvitationStudent"]},
};