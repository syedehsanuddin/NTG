/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\put-leave-requests-by-id-approve.feature */
import { test } from "playwright-bdd";

test.describe("Put Approve Leave Request", () => {

  test("PUT Put Approve Leave Request returns successful response", { tag: ["@putApproveLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putApproveLeaveRequest\" with id \"{STORED_APPROVE_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\put-leave-requests-by-id-approve.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Approve Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@putApproveLeaveRequest"]},
};