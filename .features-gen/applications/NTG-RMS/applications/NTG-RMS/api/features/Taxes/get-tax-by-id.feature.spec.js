/** Generated from: applications\NTG-RMS\api\features\Taxes\get-tax-by-id.feature */
import { test } from "playwright-bdd";

test.describe("Get a tax by ID", () => {

  test("GET Get a tax by ID returns successful response", { tag: ["@getTaxById"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getTaxById\" with id \"test-id\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should have field \"data\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Taxes\\get-tax-by-id.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get a tax by ID returns successful response": {"pickleLocation":"6:3","tags":["@getTaxById"]},
};