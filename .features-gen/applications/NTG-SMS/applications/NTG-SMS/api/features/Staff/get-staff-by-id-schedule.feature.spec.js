/** Generated from: applications\NTG-SMS\api\features\Staff\get-staff-by-id-schedule.feature */
import { test } from "playwright-bdd";

test.describe("Get Schedule Staff By Id", () => {

  test("GET Get Schedule Staff By Id returns successful response", { tag: ["@getScheduleStaffById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getScheduleStaffById\" with id \"{STORED_SCHEDULE_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Staff\\get-staff-by-id-schedule.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Schedule Staff By Id returns successful response": {"pickleLocation":"6:3","tags":["@getScheduleStaffById"]},
};