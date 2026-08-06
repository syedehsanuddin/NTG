/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\get-timing-templates.feature */
import { test } from "playwright-bdd";

test.describe("Get Timing Templates", () => {

  test("GET Get Timing Templates returns successful response", { tag: ["@getTimingTemplates"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTimingTemplates\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\get-timing-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Timing Templates returns successful response": {"pickleLocation":"6:3","tags":["@getTimingTemplates"]},
};