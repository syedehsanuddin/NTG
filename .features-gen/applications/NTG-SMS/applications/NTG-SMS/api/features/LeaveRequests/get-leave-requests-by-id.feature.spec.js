/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\get-leave-requests-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Leave Request By Id", () => {

  test("POST Create a new leaverequest returns successful response", { tag: ["@getLeaveRequestById"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateLeaveRequest\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as leaverequest id");
  });

  test("GET Get Leave Request By Id returns successful response", { tag: ["@getLeaveRequestById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLeaveRequestById\" with id \"{STORED_LEAVEREQUEST_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\get-leave-requests-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new leaverequest returns successful response": {"pickleLocation":"6:3","tags":["@getLeaveRequestById"]},
  "GET Get Leave Request By Id returns successful response": {"pickleLocation":"11:3","tags":["@getLeaveRequestById"]},
};