/** Generated from: applications\NTG-RMS\api\features\Menu\delete-buffet.feature */
import { test } from "playwright-bdd";

test.describe("Delete buffet (soft delete)", () => {

  test("DELETE Delete buffet (soft delete) returns successful response", { tag: ["@deleteBuffet"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteBuffet\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-buffet.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete buffet (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteBuffet"]},
};