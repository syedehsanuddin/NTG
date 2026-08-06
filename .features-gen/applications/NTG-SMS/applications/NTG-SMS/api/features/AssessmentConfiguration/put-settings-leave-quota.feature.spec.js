/** Generated from: applications\NTG-SMS\api\features\AssessmentConfiguration\put-settings-leave-quota.feature */
import { test } from "playwright-bdd";

test.describe("Put Leave Quota Setting", () => {

  test("PUT Put Leave Quota Setting returns successful response", { tag: ["@putLeaveQuotaSetting"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putLeaveQuotaSetting\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\AssessmentConfiguration\\put-settings-leave-quota.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Leave Quota Setting returns successful response": {"pickleLocation":"6:3","tags":["@putLeaveQuotaSetting"]},
};