/** Generated from: applications\NTG-RMS\api\features\Menu\delete-variation.feature */
import { test } from "playwright-bdd";

test.describe("Delete variation (soft delete)", () => {

  test("DELETE Delete variation (soft delete) returns successful response", { tag: ["@deleteVariation"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteVariation\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-variation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete variation (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteVariation"]},
};