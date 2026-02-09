/** Generated from: applications\NTG-RMS\api\features\Auth\put-update-profile.feature */
import { test } from "playwright-bdd";

test.describe("Update current user profile", () => {

  test("PUT Update current user profile returns successful response", { tag: ["@putUpdateProfile"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateProfile\" with payload '{\"name\":\"Automated Test\",\"phone\":\"+923483985864\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Auth\\put-update-profile.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update current user profile returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateProfile"]},
};