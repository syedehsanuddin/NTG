/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-rankings-by-class-section-id-by-subject-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Ranking Report", () => {

  test("GET Get Ranking Report returns successful response", { tag: ["@getRankingReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getRankingReport\" with id \"{STORED_RANKING_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-rankings-by-class-section-id-by-subject-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Ranking Report returns successful response": {"pickleLocation":"6:3","tags":["@getRankingReport"]},
};