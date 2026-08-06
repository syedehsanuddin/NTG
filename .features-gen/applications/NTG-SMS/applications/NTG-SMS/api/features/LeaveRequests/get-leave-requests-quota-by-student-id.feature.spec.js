/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\get-leave-requests-quota-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Quota Leave Request", () => {

  test("GET Get Quota Leave Request returns successful response", { tag: ["@getQuotaLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getQuotaLeaveRequest\" with id \"{STORED_QUOTA_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\get-leave-requests-quota-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Quota Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@getQuotaLeaveRequest"]},
};