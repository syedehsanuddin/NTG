/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\get-settings-school-days.feature */
import { test } from "playwright-bdd";

test.describe("Get School Day Setting", () => {

  test("GET Get School Day Setting returns successful response", { tag: ["@getSchoolDaySetting"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSchoolDaySetting\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\get-settings-school-days.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get School Day Setting returns successful response": {"pickleLocation":"6:3","tags":["@getSchoolDaySetting"]},
};