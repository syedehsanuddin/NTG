/** Generated from: applications\NTG-SMS\api\features\Notifications\put-notifications-read-all.feature */
import { test } from "playwright-bdd";

test.describe("Put Read All Notification", () => {

  test("PUT Put Read All Notification returns successful response", { tag: ["@putReadAllNotification"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putReadAllNotification\" with payload '\"string\"'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Notifications\\put-notifications-read-all.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put Read All Notification returns successful response": {"pickleLocation":"6:3","tags":["@putReadAllNotification"]},
};