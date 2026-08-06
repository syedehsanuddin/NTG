/** Generated from: applications\NTG-SMS\api\features\LeaveRequests\post-leave-requests.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Leave Request", () => {

  test("POST Post Create Leave Request returns successful response", { tag: ["@postCreateLeaveRequest"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateLeaveRequest\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\LeaveRequests\\post-leave-requests.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Leave Request returns successful response": {"pickleLocation":"6:3","tags":["@postCreateLeaveRequest"]},
};