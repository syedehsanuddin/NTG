/** Generated from: applications\NTG-RMS\api\features\Employees\post-create-employee.feature */
import { test } from "playwright-bdd";

test.describe("Create a new employee", () => {

  test("POST Create a new employee returns successful response", { tag: ["@postCreateEmployee"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEmployee\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"name\":\"Auasdastomated Test User\",\"roleIds\":[\"f52d7970-553b-4f27-b813-da16f4430aaf\"],\"phone\":\"{GENERATE_PHONE}\",\"nationalId\":\"12345678\",\"dateOfBirth\":\"03-12\",\"employmentType\":\"full_time\",\"joiningDate\":\"2025-12-31\",\"salary\":20000,\"isActive\":true,\"branchIds\":[\"{BRANCH_ID}\"],\"createAuthAccount\":true,\"password\":\"12345678\"}'", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"id\"");
    await And("the response should have field \"tenantId\"");
    await And("the response should have field \"role\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Employees\\post-create-employee.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new employee returns successful response": {"pickleLocation":"6:3","tags":["@postCreateEmployee"]},
};