/** Generated from: applications\NTG-RMS\api\features\Taxes\delete-tax.feature */
import { test } from "playwright-bdd";

test.describe("Delete a tax", () => {

  test("DELETE Delete a tax returns successful response", { tag: ["@deleteTax"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteTax\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Taxes\\delete-tax.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete a tax returns successful response": {"pickleLocation":"6:3","tags":["@deleteTax"]},
};