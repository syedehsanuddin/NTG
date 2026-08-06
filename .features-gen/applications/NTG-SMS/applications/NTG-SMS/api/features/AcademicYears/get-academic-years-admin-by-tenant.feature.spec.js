/** Generated from: applications\NTG-SMS\api\features\AcademicYears\get-academic-years-admin-by-tenant.feature */
import { test } from "playwright-bdd";

test.describe("Get Admin By Tenant Academic Year", () => {

  test("GET Get Admin By Tenant Academic Year returns successful response", { tag: ["@getAdminByTenantAcademicYear"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getAdminByTenantAcademicYear\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AcademicYears\\get-academic-years-admin-by-tenant.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Admin By Tenant Academic Year returns successful response": {"pickleLocation":"6:3","tags":["@getAdminByTenantAcademicYear"]},
};