/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\get-leave-requests-stats-by-student-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Stat Leave Request", () => {

  test("GET Get Stat Leave Request returns successful response", { tag: ["@getStatLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatLeaveRequest\" with id \"{STORED_STAT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\get-leave-requests-stats-by-student-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Stat Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@getStatLeaveRequest"]},
};