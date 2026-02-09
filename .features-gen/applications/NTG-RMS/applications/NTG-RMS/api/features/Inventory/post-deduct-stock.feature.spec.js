/** Generated from: applications\NTG-RMS\api\features\Inventory\post-deduct-stock.feature */
import { test } from "playwright-bdd";

test.describe("Deduct stock (Usage/Waste)", () => {

  test("POST Deduct stock (Usage/Waste) returns successful response", { tag: ["@postDeductStock"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postDeductStock\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Inventory\\post-deduct-stock.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Deduct stock (Usage/Waste) returns successful response": {"pickleLocation":"6:3","tags":["@postDeductStock"]},
};