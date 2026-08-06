/** Generated from: applications\NTG-SMS\api\features\Results\get-results-class-section-by-class-section-id-cards.feature */
import { test } from "playwright-bdd";

test.describe("Get Class Section Card Result", () => {

  test("GET Get Class Section Card Result returns successful response", { tag: ["@getClassSectionCardResult"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getClassSectionCardResult\" with id \"{STORED_CARD_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Results\\get-results-class-section-by-class-section-id-cards.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Class Section Card Result returns successful response": {"pickleLocation":"6:3","tags":["@getClassSectionCardResult"]},
};