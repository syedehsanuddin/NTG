/** Generated from: applications\NTG-SMS\api\features\Timetable\post-timetable-replicate-across-sections.feature */
import { test } from "playwright-bdd";

test.describe("Post Replicate Across Section Timetable", () => {

  test("POST Post Replicate Across Section Timetable returns successful response", { tag: ["@postReplicateAcrossSectionTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postReplicateAcrossSectionTimetable\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\post-timetable-replicate-across-sections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Replicate Across Section Timetable returns successful response": {"pickleLocation":"6:3","tags":["@postReplicateAcrossSectionTimetable"]},
};