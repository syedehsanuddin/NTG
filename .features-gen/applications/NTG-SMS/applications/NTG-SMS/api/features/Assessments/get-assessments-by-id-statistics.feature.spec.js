/** Generated from: applications\NTG-SMS\api\features\Assessments\get-assessments-by-id-statistics.feature */
import { test } from "playwright-bdd";

test.describe("Get Statistic Assessment By Id", () => {

  test("GET Get Statistic Assessment By Id returns successful response", { tag: ["@getStatisticAssessmentById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatisticAssessmentById\" with id \"{STORED_STATISTIC_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Assessments\\get-assessments-by-id-statistics.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Statistic Assessment By Id returns successful response": {"pickleLocation":"6:3","tags":["@getStatisticAssessmentById"]},
};