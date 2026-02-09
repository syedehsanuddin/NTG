/** Generated from: applications\NTG-RMS\api\features\Menu\delete-add-on.feature */
import { test } from "playwright-bdd";

test.describe("Delete add-on (soft delete)", () => {

  test("DELETE Delete add-on (soft delete) returns successful response", { tag: ["@deleteAddOn"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteAddOn\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-add-on.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete add-on (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteAddOn"]},
};