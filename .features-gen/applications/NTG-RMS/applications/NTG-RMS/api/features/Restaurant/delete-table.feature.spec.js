/** Generated from: applications\NTG-RMS\api\features\Restaurant\delete-table.feature */
import { test } from "playwright-bdd";

test.describe("Delete a table (soft delete)", () => {

  test("DELETE Delete a table (soft delete) returns successful response", { tag: ["@deleteTable"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteTable\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Restaurant\\delete-table.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a table (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteTable"]},
};