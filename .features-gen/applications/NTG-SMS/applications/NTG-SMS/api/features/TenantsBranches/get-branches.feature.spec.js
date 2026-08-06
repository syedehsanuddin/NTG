/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-branches.feature */
import { test } from "playwright-bdd";

test.describe("Get Branches", () => {

  test("GET Get Branches returns successful response", { tag: ["@getBranches"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getBranches\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-branches.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Branches returns successful response": {"pickleLocation":"6:3","tags":["@getBranches"]},
};