/** Generated from: applications\NTG-RMS\api\features\Coupons\post-create-coupon.feature */
import { test } from "playwright-bdd";

test.describe("Create a new coupon", () => {

  test("POST Create a new coupon returns successful response", { tag: ["@postCreateCoupon"] }, async ({ When, request, Then }) => {
    await When("I send a POST request to endpoint \"postCreateCoupon\" with payload '{\"code\":\"AUTOMATETEDTEST\",\"discountType\":\"fixed\",\"discountValue\":2,\"minOrderAmount\":3,\"usageLimit\":2,\"isActive\":true,\"validFrom\":\"2026-01-26T10:25:03.863Z\"}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'", null, { request });
    await Then("the response status should be 201");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("applications\\NTG-RMS\\api\\features\\Coupons\\post-create-coupon.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "POST Create a new coupon returns successful response": {"pickleLocation":"6:3","tags":["@postCreateCoupon"]},
};