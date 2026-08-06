/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-google.feature */
import { test } from "playwright-bdd";

test.describe("Get Google Auth", () => {

  test("GET Get Google Auth returns successful response", { tag: ["@getGoogleAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getGoogleAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-google.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Google Auth returns successful response": {"pickleLocation":"6:3","tags":["@getGoogleAuth"]},
};