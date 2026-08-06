/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\put-leave-requests-by-id-reject.feature */
import { test } from "playwright-bdd";

test.describe("Put Reject Leave Request", () => {

  test("PUT Put Reject Leave Request returns successful response", { tag: ["@putRejectLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putRejectLeaveRequest\" with id \"{STORED_REJECT_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\put-leave-requests-by-id-reject.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Reject Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@putRejectLeaveRequest"]},
};