/** Generated from: applications\NTG-RMS\api\features\Employees\put-update-employee.feature */
import { test } from "playwright-bdd";

test.describe("Update an employee", () => {

  test("POST Create a new employee returns successful response", { tag: ["@putUpdateEmployee"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateEmployee\" with payload '{\"email\":\"{GENERATE_EMAIL}\",\"name\":\"Automated Test User\",\"roleIds\":[\"70a5f79e-eb71-49c0-b958-b6f463c01fe3\"],\"phone\":\"{GENERATE_PHONE}\",\"nationalId\":\"12345678\",\"dateOfBirth\":\"2025-12-31\",\"employmentType\":\"full_time\",\"joiningDate\":\"2025-12-31\",\"salary\":20000,\"isActive\":true,\"branchIds\":[\"{BRANCH_ID}\"],\"createAuthAccount\":true,\"password\":\"12345678\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as employee id");
  });

  test("PUT Update an employee returns successful response", { tag: ["@putUpdateEmployee"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateEmployee\" with id \"{STORED_EMPLOYEE_ID}\" and payload '{\"name\":\"Automated Test User Updated\"}' and headers \"language=en\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Employees\\put-update-employee.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new employee returns successful response": {"pickleLocation":"7:3","tags":["@putUpdateEmployee"]},
  "PUT Update an employee returns successful response": {"pickleLocation":"13:3","tags":["@putUpdateEmployee"]},
};