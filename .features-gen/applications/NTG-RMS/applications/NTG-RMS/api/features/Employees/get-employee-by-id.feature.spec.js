/** Generated from: applications\NTG-RMS\api\features\Employees\get-employee-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get employee by ID", () => {

  test("POST Create a new employee returns successful response", { tag: ["@getEmployeeById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEmployee\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"name\":\"aAutomated Test User\",\"roleIds\":[\"70a5f79e-eb71-49c0-b958-b6f463c01fe3\"],\"phone\":\"{GENERATE_PHONE}\",\"nationalId\":\"12345678\",\"dateOfBirth\":\"2025-12-31\",\"employmentType\":\"full_time\",\"joiningDate\":\"2025-12-31\",\"salary\":20000,\"isActive\":true,\"branchIds\":[\"{BRANCH_ID}\"],\"createAuthAccount\":true,\"password\":\"12345678\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as employee id");
  });

  test("GET Get employee by ID returns successful response", { tag: ["@getEmployeeById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getEmployeeById\" with id \"{STORED_EMPLOYEE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Employees\\get-employee-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new employee returns successful response": {"pickleLocation":"6:5","tags":["@getEmployeeById"]},
  "GET Get employee by ID returns successful response": {"pickleLocation":"11:3","tags":["@getEmployeeById"]},
};