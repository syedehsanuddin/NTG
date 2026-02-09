/** Generated from: applications\NTG-RMS\api\features\Taxes\put-update-tax.feature */
import { test } from "playwright-bdd";

test.describe("Update a tax", () => {

  test("PUT Update a tax returns successful response", { tag: ["@putUpdateTax"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateTax\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Taxes\\put-update-tax.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update a tax returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateTax"]},
};