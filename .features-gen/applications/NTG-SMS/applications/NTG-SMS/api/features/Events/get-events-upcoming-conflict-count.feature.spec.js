/** Generated from: applications\NTG-SMS\api\features\Events\get-events-upcoming-conflict-count.feature */
import { test } from "playwright-bdd";

test.describe("Get Upcoming Conflict Count Event", () => {

  test("GET Get Upcoming Conflict Count Event returns successful response", { tag: ["@getUpcomingConflictCountEvent"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getUpcomingConflictCountEvent\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events-upcoming-conflict-count.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Upcoming Conflict Count Event returns successful response": {"pickleLocation":"6:3","tags":["@getUpcomingConflictCountEvent"]},
};