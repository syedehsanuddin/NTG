/** Generated from: applications\NTG-SMS\api\features\Results\get-results-student-by-student-id-cards.feature */
import { test } from "playwright-bdd";

test.describe("Get Student Card Result", () => {

  test("GET Get Student Card Result returns successful response", { tag: ["@getStudentCardResult"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getStudentCardResult\" with id \"{STORED_CARD_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\get-results-student-by-student-id-cards.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Student Card Result returns successful response": {"pickleLocation":"6:3","tags":["@getStudentCardResult"]},
};