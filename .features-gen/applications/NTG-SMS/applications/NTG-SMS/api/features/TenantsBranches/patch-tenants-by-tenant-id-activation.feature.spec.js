/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\patch-tenants-by-tenant-id-activation.feature */
import { test } from "playwright-bdd";

test.describe("Patch Activation Tenant", () => {

  test("PATCH Patch Activation Tenant returns successful response", { tag: ["@patchActivationTenant"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchActivationTenant\" with id \"{STORED_ACTIVATION_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\patch-tenants-by-tenant-id-activation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Activation Tenant returns successful response": {"pickleLocation":"6:3","tags":["@patchActivationTenant"]},
};