/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-my-branches.feature */
import { test } from "playwright-bdd";

test.describe("Get My Branche Auth", () => {

  test("GET Get My Branche Auth returns successful response", { tag: ["@getMyBrancheAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMyBrancheAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-my-branches.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get My Branche Auth returns successful response": {"pickleLocation":"6:3","tags":["@getMyBrancheAuth"]},
};