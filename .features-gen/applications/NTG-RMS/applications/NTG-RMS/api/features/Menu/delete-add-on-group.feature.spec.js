/** Generated from: applications\NTG-RMS\api\features\Menu\delete-add-on-group.feature */
import { test } from "playwright-bdd";

test.describe("Delete add-on group (soft delete)", () => {

  test("DELETE Delete add-on group (soft delete) returns successful response", { tag: ["@deleteAddOnGroup"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteAddOnGroup\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Menu\\delete-add-on-group.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete add-on group (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteAddOnGroup"]},
};