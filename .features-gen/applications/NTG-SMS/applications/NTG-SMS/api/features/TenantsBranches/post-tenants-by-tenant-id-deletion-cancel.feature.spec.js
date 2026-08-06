/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\post-tenants-by-tenant-id-deletion-cancel.feature */
import { test } from "playwright-bdd";

test.describe("Post Deletion Cancel Tenant", () => {

  test("POST Post Deletion Cancel Tenant returns successful response", { tag: ["@postDeletionCancelTenant"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDeletionCancelTenant\" with id \"{STORED_DELETIONCANCEL_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\post-tenants-by-tenant-id-deletion-cancel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Deletion Cancel Tenant returns successful response": {"pickleLocation":"6:3","tags":["@postDeletionCancelTenant"]},
};