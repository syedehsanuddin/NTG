/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-tenants-all.feature */
import { test } from "playwright-bdd";

test.describe("Get All Tenant", () => {

  test("GET Get All Tenant returns successful response", { tag: ["@getAllTenant"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAllTenant\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-tenants-all.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get All Tenant returns successful response": {"pickleLocation":"6:3","tags":["@getAllTenant"]},
};