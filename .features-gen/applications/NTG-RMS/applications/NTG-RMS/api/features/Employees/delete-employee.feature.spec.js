/** Generated from: applications\NTG-RMS\api\features\Employees\delete-employee.feature */
import { test } from "playwright-bdd";

test.describe("Delete an employee (soft delete)", () => {

  test("POST Create a new employee returns successful response", { tag: ["@deleteEmployee", "@happyFlow"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEmployee\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"name\":\"Automated Test User\",\"roleIds\":[\"f52d7970-553b-4f27-b813-da16f4430aaf\"],\"phone\":\"{GENERATE_PHONE}\",\"nationalId\":\"12345678\",\"dateOfBirth\":\"03-12\",\"employmentType\":\"full_time\",\"joiningDate\":\"2025-12-31\",\"salary\":20000,\"isActive\":true,\"branchIds\":[\"{BRANCH_ID}\"],\"createAuthAccount\":true,\"password\":\"12345678\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as employee id");
  });

  test("DELETE Delete an employee (soft delete) returns successful response", { tag: ["@deleteEmployee", "@happyFlow"] }, async ({ When, request, Then, And }) => {
    await When("I send a DELETE request to endpoint \"deleteEmployee\" with id \"{STORED_EMPLOYEE_ID}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should equal '{\"message\":\"Employee deleted successfully\"}'");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Employees\\delete-employee.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new employee returns successful response": {"pickleLocation":"6:5","tags":["@deleteEmployee","@happyFlow"]},
  "DELETE Delete an employee (soft delete) returns successful response": {"pickleLocation":"11:3","tags":["@deleteEmployee","@happyFlow"]},
};