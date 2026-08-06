/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\post-tenants-by-tenant-id-deletion-request.feature */
import { test } from "playwright-bdd";

test.describe("Post Deletion Request Tenant", () => {

  test("POST Post Deletion Request Tenant returns successful response", { tag: ["@postDeletionRequestTenant"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postDeletionRequestTenant\" with id \"{STORED_DELETIONREQUEST_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\post-tenants-by-tenant-id-deletion-request.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Deletion Request Tenant returns successful response": {"pickleLocation":"6:3","tags":["@postDeletionRequestTenant"]},
};