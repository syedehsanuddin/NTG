/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\put-vacations-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Put Update Vacation", () => {

  test("POST Create a new vacation returns successful response", { tag: ["@putUpdateVacation"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateVacation\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as vacation id");
  });

  test("PUT Put Update Vacation returns successful response", { tag: ["@putUpdateVacation"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateVacation\" with id \"{STORED_VACATION_ID}\" and payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\put-vacations-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new vacation returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateVacation"]},
  "PUT Put Update Vacation returns successful response": {"pickleLocation":"11:3","tags":["@putUpdateVacation"]},
};