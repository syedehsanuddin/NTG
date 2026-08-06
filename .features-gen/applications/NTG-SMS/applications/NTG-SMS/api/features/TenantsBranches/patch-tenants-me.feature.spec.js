/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\patch-tenants-me.feature */
import { test } from "playwright-bdd";

test.describe("Patch Me Tenant", () => {

  test("PATCH Patch Me Tenant returns successful response", { tag: ["@patchMeTenant"] }, async ({ When, request, Then }) => {
    await When("I send a PATCH request to endpoint \"patchMeTenant\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\patch-tenants-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PATCH Patch Me Tenant returns successful response": {"pickleLocation":"6:3","tags":["@patchMeTenant"]},
};