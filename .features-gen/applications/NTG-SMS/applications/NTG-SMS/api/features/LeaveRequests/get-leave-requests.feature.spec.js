/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\get-leave-requests.feature */
import { test } from "playwright-bdd";

test.describe("Get Leave Requests", () => {

  test("GET Get Leave Requests returns successful response", { tag: ["@getLeaveRequests"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLeaveRequests\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\get-leave-requests.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Leave Requests returns successful response": {"pickleLocation":"6:3","tags":["@getLeaveRequests"]},
};