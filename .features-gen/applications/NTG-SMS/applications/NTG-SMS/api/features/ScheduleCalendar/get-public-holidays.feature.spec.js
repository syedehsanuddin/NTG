/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\get-public-holidays.feature */
import { test } from "playwright-bdd";

test.describe("Get Public Holidays", () => {

  test("GET Get Public Holidays returns successful response", { tag: ["@getPublicHolidays"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPublicHolidays\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\get-public-holidays.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Public Holidays returns successful response": {"pickleLocation":"6:3","tags":["@getPublicHolidays"]},
};