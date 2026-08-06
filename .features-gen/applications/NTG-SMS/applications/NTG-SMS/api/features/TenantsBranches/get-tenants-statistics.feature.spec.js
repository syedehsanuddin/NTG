/** Generated from: applications\NTG-SMS\api\features\TenantsBranches\get-tenants-statistics.feature */
import { test } from "playwright-bdd";

test.describe("Get Statistic Tenant", () => {

  test("GET Get Statistic Tenant returns successful response", { tag: ["@getStatisticTenant"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatisticTenant\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\TenantsBranches\\get-tenants-statistics.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Statistic Tenant returns successful response": {"pickleLocation":"6:3","tags":["@getStatisticTenant"]},
};