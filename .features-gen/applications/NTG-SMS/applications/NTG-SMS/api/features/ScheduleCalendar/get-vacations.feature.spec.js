/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\get-vacations.feature */
import { test } from "playwright-bdd";

test.describe("Get Vacations", () => {

  test("GET Get Vacations returns successful response", { tag: ["@getVacations"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getVacations\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\get-vacations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Vacations returns successful response": {"pickleLocation":"6:3","tags":["@getVacations"]},
};