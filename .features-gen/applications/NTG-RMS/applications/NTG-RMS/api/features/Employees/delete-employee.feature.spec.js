/** Generated from: applications\NTG-RMS\api\features\Employees\delete-employee.feature */
import { test } from "playwright-bdd";

test.describe("Delete an employee (soft delete)", () => {

  test("POST Create a new employee returns successful response", { tag: ["@deleteEmployee"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEmployee\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"name\":\"Automdssddaated Test User\",\"roleIds\":[\"70a5f79e-eb71-49c0-b958-b6f463c01fe3\"],\"phone\":\"{GENERATE_PHONE}\",\"nationalId\":\"12345678\",\"dateOfBirth\":\"2025-12-31\",\"employmentType\":\"full_time\",\"joiningDate\":\"2025-12-31\",\"salary\":20000,\"isActive\":true,\"branchIds\":[\"bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191\"],\"createAuthAccount\":true,\"password\":\"12345678\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as employee id");
  });

  test("DELETE Delete an employee (soft delete) returns successful response", { tag: ["@deleteEmployee"] }, async ({ When, request, Then, And }) => {
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
  "POST Create a new employee returns successful response": {"pickleLocation":"7:5","tags":["@deleteEmployee"]},
  "DELETE Delete an employee (soft delete) returns successful response": {"pickleLocation":"12:3","tags":["@deleteEmployee"]},
};