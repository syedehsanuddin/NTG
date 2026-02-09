/** Generated from: applications\NTG-RMS\api\features\Auth\post-login.feature */
import { test } from "playwright-bdd";

test.describe("Login user", () => {

  test("POST Login user returns successful response", { tag: ["@postLogin"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postLogin\" with payload '{\"email\": \"Regresseion@mailinator.com\",\"password\": \"12345678\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Auth\\post-login.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Login user returns successful response": {"pickleLocation":"6:3","tags":["@postLogin"]},
};