/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-profile.feature */
import { test } from "playwright-bdd";

test.describe("Get Profile Auth", () => {

  test("GET Get Profile Auth returns successful response", { tag: ["@getProfileAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getProfileAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-profile.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Profile Auth returns successful response": {"pickleLocation":"6:3","tags":["@getProfileAuth"]},
};