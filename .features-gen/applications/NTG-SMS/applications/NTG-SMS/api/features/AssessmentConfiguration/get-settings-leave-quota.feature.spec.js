/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\get-settings-leave-quota.feature */
import { test } from "playwright-bdd";

test.describe("Get Leave Quota Setting", () => {

  test("GET Get Leave Quota Setting returns successful response", { tag: ["@getLeaveQuotaSetting"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getLeaveQuotaSetting\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\get-settings-leave-quota.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Leave Quota Setting returns successful response": {"pickleLocation":"6:3","tags":["@getLeaveQuotaSetting"]},
};