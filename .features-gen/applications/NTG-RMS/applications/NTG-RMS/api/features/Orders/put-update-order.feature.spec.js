/** Generated from: applications\NTG-RMS\api\features\Orders\put-update-order.feature */
import { test } from "playwright-bdd";

test.describe("Update/modify an existing order (only if not paid)", () => {

  test("PUT Update/modify an existing order (only if not paid) returns successful response", { tag: ["@putUpdateOrder"] }, async ({ When, request, Then, And }) => {
    await When("I send a PUT request to endpoint \"putUpdateOrder\" with id \"test-id\" and payload \"{}\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\put-update-order.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "PUT Update/modify an existing order (only if not paid) returns successful response": {"pickleLocation":"6:3","tags":["@putUpdateOrder"]},
};