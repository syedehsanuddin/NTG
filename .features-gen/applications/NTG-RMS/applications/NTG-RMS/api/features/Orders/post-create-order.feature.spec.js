/** Generated from: applications\NTG-RMS\api\features\Orders\post-create-order.feature */
import { test } from "playwright-bdd";

test.describe("Create a new order", () => {

  test("POST Create a new order returns successful response", { tag: ["@postCreateOrder"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateOrder\" with payload \"{}\"", null, { request });
    await Then("the response status should be 201");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\post-create-order.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new order returns successful response": {"pickleLocation":"6:3","tags":["@postCreateOrder"]},
};