/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\put-branches-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Branche", () => {

  test("POST Create a new branche returns successful response", { tag: ["@putUpdateBranche"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateBranche\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as branche id");
  });

  test("PUT Put Update Branche returns successful response", { tag: ["@putUpdateBranche"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateBranche\" with id \"{STORED_BRANCHE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\put-branches-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new branche returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateBranche"]},
  "PUT Put Update Branche returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateBranche"]},
};