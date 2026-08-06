/** Generated from: applications\NTG-SMS\api\features\Notifications\get-notifications.feature */
import { test } from "playwright-bdd";

test.describe("Get Notifications", () => {

  test("GET Get Notifications returns successful response", { tag: ["@getNotifications"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getNotifications\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Notifications\\get-notifications.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Notifications returns successful response": {"pickleLocation":"6:3","tags":["@getNotifications"]},
};