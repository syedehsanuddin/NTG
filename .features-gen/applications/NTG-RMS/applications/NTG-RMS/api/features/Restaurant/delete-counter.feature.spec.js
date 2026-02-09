/** Generated from: applications\NTG-RMS\api\features\Restaurant\delete-counter.feature */
import { test } from "playwright-bdd";

test.describe("Delete a counter (soft delete)", () => {

  test("DELETE Delete a counter (soft delete) returns successful response", { tag: ["@deleteCounter"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteCounter\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\delete-counter.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a counter (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteCounter"]},
};