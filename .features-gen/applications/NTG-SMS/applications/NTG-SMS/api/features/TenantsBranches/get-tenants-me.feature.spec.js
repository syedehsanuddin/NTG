/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-tenants-me.feature */
import { test } from "playwright-bdd";

test.describe("Get Me Tenant", () => {

  test("GET Get Me Tenant returns successful response", { tag: ["@getMeTenant"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMeTenant\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-tenants-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Me Tenant returns successful response": {"pickleLocation":"6:3","tags":["@getMeTenant"]},
};