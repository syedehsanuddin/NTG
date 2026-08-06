/** Generated from: applications\NTG-SMS\api\features\Reports\get-reports-public-class-by-class-section-id-counts.feature */
import { test } from "playwright-bdd";

test.describe("Get Public Clas Count Report", () => {

  test("GET Get Public Clas Count Report returns successful response", { tag: ["@getPublicClasCountReport"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getPublicClasCountReport\" with id \"{STORED_COUNT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Reports\\get-reports-public-class-by-class-section-id-counts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Public Clas Count Report returns successful response": {"pickleLocation":"6:3","tags":["@getPublicClasCountReport"]},
};