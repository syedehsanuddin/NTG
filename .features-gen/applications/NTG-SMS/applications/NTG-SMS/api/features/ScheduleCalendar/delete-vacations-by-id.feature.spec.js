/** Generated from: applications\NTG-SMS\api\features\ScheduleCalendar\delete-vacations-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Delete Vacation", () => {

  test("POST Create a new vacation returns successful response", { tag: ["@deleteVacation"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateVacation\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as vacation id");
  });

  test("DELETE Delete Vacation returns successful response", { tag: ["@deleteVacation"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteVacation\" with id \"{STORED_VACATION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\ScheduleCalendar\\delete-vacations-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new vacation returns successful response": {"pickleLocation":"6:3","tags":["@deleteVacation"]},
  "DELETE Delete Vacation returns successful response": {"pickleLocation":"11:3","tags":["@deleteVacation"]},
};