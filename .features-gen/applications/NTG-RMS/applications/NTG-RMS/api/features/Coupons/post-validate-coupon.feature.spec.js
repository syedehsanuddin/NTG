/** Generated from: applications\NTG-RMS\api\features\Coupons\post-validate-coupon.feature */
import { test } from "playwright-bdd";

test.describe("Validate coupon code", () => {

  test("POST Create a new coupon returns successful response", { tag: ["@postValidateCoupon"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCoupon\" with payload '{\"code\":\"AUTOMATETEDTEST\",\"discountType\":\"fixed\",\"discountValue\":2,\"minOrderAmount\":3,\"usageLimit\":2,\"isActive\":true,\"validFrom\":\"2026-01-26T10:25:03.863Z\"}' and headers 'branchId={BRANCH_ID}'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as coupon id");
  });

  test("POST Validate coupon code returns successful response", { tag: ["@postValidateCoupon"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postValidateCoupon\" with payload '{\"code\":\"{STORED_COUPON_CODE}\",\"subtotal\":5000}' and headers 'branchId={BRANCH_ID}'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Coupons\\post-validate-coupon.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new coupon returns successful response": {"pickleLocation":"7:3","tags":["@postValidateCoupon"]},
  "POST Validate coupon code returns successful response": {"pickleLocation":"12:3","tags":["@postValidateCoupon"]},
};