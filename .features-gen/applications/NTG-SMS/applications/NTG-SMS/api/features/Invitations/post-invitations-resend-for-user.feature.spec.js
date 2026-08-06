/** Generated from: applications\NTG-SMS\api\features\Invitations\post-invitations-resend-for-user.feature */
import { test } from "playwright-bdd";

test.describe("Post Resend For User Invitation", () => {

  test("POST Post Resend For User Invitation returns successful response", { tag: ["@postResendForUserInvitation"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postResendForUserInvitation\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Invitations\\post-invitations-resend-for-user.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Resend For User Invitation returns successful response": {"pickleLocation":"6:3","tags":["@postResendForUserInvitation"]},
};