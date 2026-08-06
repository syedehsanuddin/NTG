/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\post-vacations.feature */
import { test } from "playwright-bdd";

test.describe("Post Create Vacation", () => {

  test("POST Post Create Vacation returns successful response", { tag: ["@postCreateVacation"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateVacation\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\post-vacations.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Create Vacation returns successful response": {"pickleLocation":"6:3","tags":["@postCreateVacation"]},
};