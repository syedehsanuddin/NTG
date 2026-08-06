/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\post-tenants-logo.feature */
import { test } from "playwright-bdd";

test.describe("Post Logo Tenant", () => {

  test("POST Post Logo Tenant returns successful response", { tag: ["@postLogoTenant"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postLogoTenant\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\post-tenants-logo.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Logo Tenant returns successful response": {"pickleLocation":"6:3","tags":["@postLogoTenant"]},
};