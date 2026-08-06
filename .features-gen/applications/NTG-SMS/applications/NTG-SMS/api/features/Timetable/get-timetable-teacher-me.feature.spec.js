/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-teacher-me.feature */
import { test } from "playwright-bdd";

test.describe("Get Teacher Me Timetable", () => {

  test("GET Get Teacher Me Timetable returns successful response", { tag: ["@getTeacherMeTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getTeacherMeTimetable\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-teacher-me.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Teacher Me Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getTeacherMeTimetable"]},
};