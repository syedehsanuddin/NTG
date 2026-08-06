/** Generated from: applications\NTG-SMS\api\features\Notifications\get-notifications-unread-count.feature */
import { test } from "playwright-bdd";

test.describe("Get Unread Count Notification", () => {

  test("GET Get Unread Count Notification returns successful response", { tag: ["@getUnreadCountNotification"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUnreadCountNotification\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Notifications\\get-notifications-unread-count.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Unread Count Notification returns successful response": {"pickleLocation":"6:3","tags":["@getUnreadCountNotification"]},
};