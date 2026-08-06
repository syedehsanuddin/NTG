/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-current-child.feature */
import { test } from "playwright-bdd";

test.describe("Get Current Child Auth", () => {

  test("GET Get Current Child Auth returns successful response", { tag: ["@getCurrentChildAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getCurrentChildAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-current-child.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Current Child Auth returns successful response": {"pickleLocation":"6:3","tags":["@getCurrentChildAuth"]},
};