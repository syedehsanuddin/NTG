/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-teacher-by-staff-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Teacher Timetable", () => {

  test("GET Get Teacher Timetable returns successful response", { tag: ["@getTeacherTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTeacherTimetable\" with id \"{STORED_TEACHER_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-teacher-by-staff-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Teacher Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getTeacherTimetable"]},
};