/** Generated from: applications\NTG-RMS\api\features\Coupons\delete-coupon.feature */
import { test } from "playwright-bdd";

test.describe("Delete coupon (soft delete)", () => {

  test("POST Create a new coupon returns successful response", async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCoupon\" with payload '{\"code\":\"AUTOMATETEDTEST\",\"discountType\":\"fixed\",\"discountValue\":2,\"minOrderAmount\":3,\"usageLimit\":2,\"isActive\":true,\"validFrom\":\"2026-01-26T10:25:03.863Z\"}' and headers 'branchId={BRANCH_ID}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as coupon id");
  });

  test("DELETE Delete coupon (soft delete) returns successful response", async ({ When, request, Then }) => {
    await When("I send a DELETE request to endpoint \"deleteCoupon\" with id \"{STORED_COUPON_ID}\"", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Coupons\\delete-coupon.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new coupon returns successful response": {"pickleLocation":"7:3"},
  "DELETE Delete coupon (soft delete) returns successful response": {"pickleLocation":"13:3"},
};