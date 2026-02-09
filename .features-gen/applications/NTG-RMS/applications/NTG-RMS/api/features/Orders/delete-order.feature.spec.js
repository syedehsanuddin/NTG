/** Generated from: applications\NTG-RMS\api\features\Orders\delete-order.feature */
import { test } from "playwright-bdd";

test.describe("Delete order (soft delete)", () => {

  test("DELETE Delete order (soft delete) returns successful response", { tag: ["@deleteOrder"] }, async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteOrder\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Orders\\delete-order.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "DELETE Delete order (soft delete) returns successful response": {"pickleLocation":"6:3","tags":["@deleteOrder"]},
};