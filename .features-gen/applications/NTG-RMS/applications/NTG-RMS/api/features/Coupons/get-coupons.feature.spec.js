/** Generated from: applications\NTG-RMS\api\features\Coupons\get-coupons.feature */
import { test } from "playwright-bdd";

test.describe("Get all coupons", () => {

  test("GET Get all coupons returns successful response", { tag: ["@getCoupons", "@happyFlow"] }, async ({ When, request, Then, And }) => {
    await When("I send a GET request to endpoint \"getCoupons\"", null, { request });
    await Then("the response status should be 200");
    await And("the response should be a valid JSON array");
    await And("the response array should contain at least 1 item");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Coupons\\get-coupons.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "GET Get all coupons returns successful response": {"pickleLocation":"6:3","tags":["@getCoupons","@happyFlow"]},
};