/** Generated from: applications\NTG-RMS\api\features\Coupons\put-update-coupon.feature */
import { test } from "playwright-bdd";

test.describe("Update coupon", () => {

  test("POST Create a new coupon returns successful response", { tag: ["@putUpdateCoupon"] }, async ({ When, request, Then, And }) => {
    await When("I send a POST request to endpoint \"postCreateCoupon\" with payload '{\"code\":\"AUTOMATETEDTEST\",\"discountType\":\"fixed\",\"discountValue\":2,\"minOrderAmount\":3,\"usageLimit\":2,\"isActive\":true,\"validFrom\":\"2026-01-26T10:25:03.863Z\"}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'", null, { request });
    await Then("the response status should be 201");
    await And("I store the response id as coupon id");
  });

  test("PUT Update coupon returns successful response", { tag: ["@putUpdateCoupon"] }, async ({ When, request, Then }) => {
    await When("I send a PUT request to endpoint \"putUpdateCoupon\" with id \"{STORED_COUPON_ID}\" and payload '{\"code\":\"{STORED_COUPON_CODE}\",\"discountType\":\"percentage\",\"discountValue\":45,\"minOrderAmount\":45,\"maxDiscountAmount\":45,\"usageLimit\":45,\"isActive\":true,\"validFrom\":\"2026-01-26T10:25:03.863+00:00\",\"validUntil\":\"2026-11-29T19:00:00.000Z\"}'", null, { request });
    await Then("the response status should be 200");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Coupons\\put-update-coupon.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new coupon returns successful response": {"pickleLocation":"7:5","tags":["@putUpdateCoupon"]},
  "PUT Update coupon returns successful response": {"pickleLocation":"13:3","tags":["@putUpdateCoupon"]},
};