/** Generated from: applications\NTG-SMS\api\features\Authentication\get-auth-current-branch.feature */
import { test } from "playwright-bdd";

test.describe("Get Current Branch Auth", () => {

  test("GET Get Current Branch Auth returns successful response", { tag: ["@getCurrentBranchAuth"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getCurrentBranchAuth\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Authentication\\get-auth-current-branch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Current Branch Auth returns successful response": {"pickleLocation":"6:3","tags":["@getCurrentBranchAuth"]},
};