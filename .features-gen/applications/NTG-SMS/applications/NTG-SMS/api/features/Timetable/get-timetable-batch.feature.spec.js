/** Generated from: applications\NTG-SMS\api\features\Timetable\get-timetable-batch.feature */
import { test } from "playwright-bdd";

test.describe("Get Batch Timetable", () => {

  test("GET Get Batch Timetable returns successful response", { tag: ["@getBatchTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getBatchTimetable\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\get-timetable-batch.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Batch Timetable returns successful response": {"pickleLocation":"6:3","tags":["@getBatchTimetable"]},
};