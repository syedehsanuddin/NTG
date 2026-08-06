/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-my-children.feature */
import { test } from "playwright-bdd";

test.describe("Get My Children Auth", () => {

  test("GET Get My Children Auth returns successful response", { tag: ["@getMyChildrenAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMyChildrenAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-my-children.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get My Children Auth returns successful response": {"pickleLocation":"6:3","tags":["@getMyChildrenAuth"]},
};