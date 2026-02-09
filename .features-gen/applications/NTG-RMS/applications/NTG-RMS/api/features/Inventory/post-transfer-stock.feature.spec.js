/** Generated from: applications\NTG-RMS\api\features\Inventory\post-transfer-stock.feature */
import { test } from "playwright-bdd";

test.describe("Transfer stock between branches", () => {

  test("POST Transfer stock between branches returns successful response", { tag: ["@postTransferStock"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postTransferStock\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-transfer-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Transfer stock between branches returns successful response": {"pickleLocation":"6:3","tags":["@postTransferStock"]},
};