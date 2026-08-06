/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\put-leave-requests-by-id-cancel.feature */
import { test } from "playwright-bdd";

test.describe("Put Cancel Leave Request", () => {

  test("PUT Put Cancel Leave Request returns successful response", { tag: ["@putCancelLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putCancelLeaveRequest\" with id \"{STORED_CANCEL_ID}\" and payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\put-leave-requests-by-id-cancel.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Cancel Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@putCancelLeaveRequest"]},
};