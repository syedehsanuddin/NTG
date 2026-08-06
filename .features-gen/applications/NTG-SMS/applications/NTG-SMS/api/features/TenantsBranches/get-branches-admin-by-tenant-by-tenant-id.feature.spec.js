/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-branches-admin-by-tenant-by-tenant-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Admin By Tenant Branche", () => {

  test("GET Get Admin By Tenant Branche returns successful response", { tag: ["@getAdminByTenantBranche"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAdminByTenantBranche\" with id \"{STORED_BYTENANT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-branches-admin-by-tenant-by-tenant-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Admin By Tenant Branche returns successful response": {"pickleLocation":"6:3","tags":["@getAdminByTenantBranche"]},
};