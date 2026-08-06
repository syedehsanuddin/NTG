/** Generated from: applications\NTG-SMS\api\features\Results\get-results-class-section-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Class Section Result", () => {

  test("GET Get Class Section Result returns successful response", { tag: ["@getClassSectionResult"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassSectionResult\" with id \"{STORED_CLASSSECTION_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\get-results-class-section-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Class Section Result returns successful response": {"pickleLocation":"6:3","tags":["@getClassSectionResult"]},
};