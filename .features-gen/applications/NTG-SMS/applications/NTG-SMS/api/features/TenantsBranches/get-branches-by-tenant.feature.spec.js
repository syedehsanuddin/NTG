/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-branches-by-tenant.feature */
import { test } from "playwright-bdd";

test.describe("Get By Tenant Branche", () => {

  test("GET Get By Tenant Branche returns successful response", { tag: ["@getByTenantBranche"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getByTenantBranche\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-branches-by-tenant.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get By Tenant Branche returns successful response": {"pickleLocation":"6:3","tags":["@getByTenantBranche"]},
};