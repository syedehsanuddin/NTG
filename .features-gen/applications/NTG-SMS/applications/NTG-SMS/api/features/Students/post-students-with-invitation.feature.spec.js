/** Generated from: applications\NTG-SMS\api\features\Students\post-students-with-invitation.feature */
import { test } from "playwright-bdd";

test.describe("Post With Invitation Student", () => {

  test("POST Post With Invitation Student returns successful response", { tag: ["@postWithInvitationStudent"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postWithInvitationStudent\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Students\\post-students-with-invitation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post With Invitation Student returns successful response": {"pickleLocation":"6:3","tags":["@postWithInvitationStudent"]},
};