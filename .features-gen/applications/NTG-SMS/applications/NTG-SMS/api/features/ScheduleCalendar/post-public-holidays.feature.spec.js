/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\post-public-holidays.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Public Holiday", () => {

  test("POST Post Create Public Holiday returns successful response", { tag: ["@postCreatePublicHoliday"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreatePublicHoliday\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\post-public-holidays.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Public Holiday returns successful response": {"pickleLocation":"6:3","tags":["@postCreatePublicHoliday"]},
};