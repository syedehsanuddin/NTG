/** Generated from: applications\NTG-SMS\api\features\Notifications\get-notifications-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Notification By Id", () => {

  test("GET Get Notification By Id returns successful response", { tag: ["@getNotificationById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getNotificationById\" with id \"{STORED_NOTIFICATION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Notifications\\get-notifications-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Notification By Id returns successful response": {"pickleLocation":"6:3","tags":["@getNotificationById"]},
};