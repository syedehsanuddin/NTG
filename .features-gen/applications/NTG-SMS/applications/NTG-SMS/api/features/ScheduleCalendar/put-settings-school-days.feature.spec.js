/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\put-settings-school-days.feature */
import { test } from "playwright-bdd";

test.describe("Put School Day Setting", () => {

  test("PUT Put School Day Setting returns successful response", { tag: ["@putSchoolDaySetting"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putSchoolDaySetting\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\put-settings-school-days.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Put School Day Setting returns successful response": {"pickleLocation":"6:3","tags":["@putSchoolDaySetting"]},
};