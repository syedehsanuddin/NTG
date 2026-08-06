/** Generated from: applications\NTG-SMS\api\features\Timetable\post-timetable-slots.feature */
import { test } from "playwright-bdd";

test.describe("Post Slot Timetable", () => {

  test("POST Post Slot Timetable returns successful response", { tag: ["@postSlotTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postSlotTimetable\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\post-timetable-slots.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Slot Timetable returns successful response": {"pickleLocation":"6:3","tags":["@postSlotTimetable"]},
};