/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\put-public-holidays-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Public Holiday", () => {

  test("POST Create a new publicholiday returns successful response", { tag: ["@putUpdatePublicHoliday"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreatePublicHoliday\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as publicholiday id");
  });

  test("PUT Put Update Public Holiday returns successful response", { tag: ["@putUpdatePublicHoliday"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdatePublicHoliday\" with id \"{STORED_PUBLICHOLIDAY_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\put-public-holidays-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new publicholiday returns successful response": {"pickleLocation":"6:3","tags":["@putUpdatePublicHoliday"]},
  "PUT Put Update Public Holiday returns successful response": {"pickleLocation":"11:3","tags":["@putUpdatePublicHoliday"]},
};