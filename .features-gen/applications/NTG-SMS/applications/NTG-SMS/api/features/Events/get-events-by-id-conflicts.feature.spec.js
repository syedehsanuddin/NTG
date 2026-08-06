/** Generated from: applications\NTG-SMS\api\features\Events\get-events-by-id-conflicts.feature */
import { test } from "playwright-bdd";

test.describe("Get Conflict Event By Id", () => {

  test("GET Get Conflict Event By Id returns successful response", { tag: ["@getConflictEventById"] }, async ({ When, request, Then }) => {
    await When("I send a GET request to endpoint \"getConflictEventById\" with id \"{STORED_CONFLICT_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-SMS\\api\\features\\Events\\get-events-by-id-conflicts.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get Conflict Event By Id returns successful response": {"pickleLocation":"6:3","tags":["@getConflictEventById"]},
};