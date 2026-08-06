/** Generated from: applications\NTG-SMS\api\features\Timetable\post-timetable-replicate-from-section.feature */
import { test } from "playwright-bdd";

test.describe("Post Replicate From Section Timetable", () => {

  test("POST Post Replicate From Section Timetable returns successful response", { tag: ["@postReplicateFromSectionTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postReplicateFromSectionTimetable\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\post-timetable-replicate-from-section.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Replicate From Section Timetable returns successful response": {"pickleLocation":"6:3","tags":["@postReplicateFromSectionTimetable"]},
};