/** Generated from: applications\NTG-SMS\api\features\PublicApi\get-public-statistics-by-branch-code.feature */
import { test } from "playwright-bdd";

test.describe("Get Statistic Public", () => {

  test("GET Get Statistic Public returns successful response", { tag: ["@getStatisticPublic"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStatisticPublic\" with id \"{STORED_STATISTIC_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\PublicApi\\get-public-statistics-by-branch-code.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Statistic Public returns successful response": {"pickleLocation":"6:3","tags":["@getStatisticPublic"]},
};