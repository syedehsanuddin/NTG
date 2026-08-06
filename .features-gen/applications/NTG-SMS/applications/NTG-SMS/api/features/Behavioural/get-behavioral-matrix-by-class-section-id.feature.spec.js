/** Generated from: applications\NTG-SMS\api\features\Behavioural\get-behavioral-matrix-by-class-section-id.feature */
import { test } from "playwright-bdd";

test.describe("Get Matrix Behavioral", () => {

  test("GET Get Matrix Behavioral returns successful response", { tag: ["@getMatrixBehavioral"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getMatrixBehavioral\" with id \"{STORED_MATRIX_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Behavioural\\get-behavioral-matrix-by-class-section-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Matrix Behavioral returns successful response": {"pickleLocation":"6:3","tags":["@getMatrixBehavioral"]},
};