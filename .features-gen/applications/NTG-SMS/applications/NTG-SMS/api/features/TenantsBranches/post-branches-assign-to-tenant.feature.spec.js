/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\post-branches-assign-to-tenant.feature */
import { test } from "playwright-bdd";

test.describe("Post Assign To Tenant Branche", () => {

  test("POST Post Assign To Tenant Branche returns successful response", { tag: ["@postAssignToTenantBranche"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postAssignToTenantBranche\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\post-branches-assign-to-tenant.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Assign To Tenant Branche returns successful response": {"pickleLocation":"6:3","tags":["@postAssignToTenantBranche"]},
};