/** Generated from: applications\NTG-SMS\api\features\Attendance\post-attendance-bulk.feature */
import { test } from "playwright-bdd";

test.describe("Post Bulk Attendance", () => {

  test("POST Post Bulk Attendance returns successful response", { tag: ["@postBulkAttendance"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postBulkAttendance\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Attendance\\post-attendance-bulk.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Bulk Attendance returns successful response": {"pickleLocation":"6:3","tags":["@postBulkAttendance"]},
};