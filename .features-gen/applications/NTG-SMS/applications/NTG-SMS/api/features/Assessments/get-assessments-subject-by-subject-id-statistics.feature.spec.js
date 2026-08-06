/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-subject-by-subject-id-statistics.feature */
import { test } from "playwright-bdd";

test.describe("Get Subject Statistic Assessment", () => {

  test("GET Get Subject Statistic Assessment returns successful response", { tag: ["@getSubjectStatisticAssessment"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getSubjectStatisticAssessment\" with id \"{STORED_STATISTIC_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-subject-by-subject-id-statistics.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Subject Statistic Assessment returns successful response": {"pickleLocation":"6:3","tags":["@getSubjectStatisticAssessment"]},
};