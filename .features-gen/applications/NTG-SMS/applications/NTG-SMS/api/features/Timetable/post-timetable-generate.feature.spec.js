/** Generated from: applications\NTG-SMS\api\features\Timetable\post-timetable-generate.feature */
import { test } from "playwright-bdd";

test.describe("Post Generate Timetable", () => {

  test("POST Post Generate Timetable returns successful response", { tag: ["@postGenerateTimetable"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postGenerateTimetable\" with payload '{\"name\":\"Automated Test\"}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Timetable\\post-timetable-generate.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Post Generate Timetable returns successful response": {"pickleLocation":"6:3","tags":["@postGenerateTimetable"]},
};