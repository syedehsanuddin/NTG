/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-me.feature */
import { test } from "playwright-bdd";

test.describe("Get Me Auth", () => {

  test("GET Get Me Auth returns successful response", { tag: ["@getMeAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMeAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Me Auth returns successful response": {"pickleLocation":"6:3","tags":["@getMeAuth"]},
};