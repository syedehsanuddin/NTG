/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\post-timing-templates.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Timing Template", () => {

  test("POST Post Create Timing Template returns successful response", { tag: ["@postCreateTimingTemplate"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateTimingTemplate\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\post-timing-templates.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Timing Template returns successful response": {"pickleLocation":"6:3","tags":["@postCreateTimingTemplate"]},
};