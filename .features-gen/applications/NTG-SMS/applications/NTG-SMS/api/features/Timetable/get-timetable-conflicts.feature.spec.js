/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-conflicts.feature */
import { test } from "playwright-bdd";

test.describe("Get Conflict Timetable", () => {

  test("GET Get Conflict Timetable returns successful response", { tag: ["@getConflictTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getConflictTimetable\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-conflicts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Conflict Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getConflictTimetable"]},
};