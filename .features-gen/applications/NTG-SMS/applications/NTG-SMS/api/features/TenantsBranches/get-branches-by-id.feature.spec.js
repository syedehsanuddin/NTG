/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-branches-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Branche By Id", () => {

  test("POST Create a new branche returns successful response", { tag: ["@getBrancheById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateBranche\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as branche id");
  });

  test("GET Get Branche By Id returns successful response", { tag: ["@getBrancheById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getBrancheById\" with id \"{STORED_BRANCHE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-branches-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new branche returns successful response": {"pickleLocation":"6:3","tags":["@getBrancheById"]},
  "GET Get Branche By Id returns successful response": {"pickleLocation":"11:3","tags":["@getBrancheById"]},
};