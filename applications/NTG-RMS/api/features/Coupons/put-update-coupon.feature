@putUpdateCoupon

Feature: Update coupon
  Validate PUT /api/v1/coupons/{id} endpoint


    Scenario: POST Create a new coupon returns successful response
    When I send a POST request to endpoint "postCreateCoupon" with payload '{"code":"AUTOMATETEDTEST","discountType":"fixed","discountValue":2,"minOrderAmount":3,"usageLimit":2,"isActive":true,"validFrom":"2026-01-26T10:25:03.863Z"}' and headers 'branchId={BRANCH_ID}'
    Then the response status should be 201
    And I store the response id as coupon id


  Scenario: PUT Update coupon returns successful response
    When I send a PUT request to endpoint "putUpdateCoupon" with id "{STORED_COUPON_ID}" and payload '{"code":"{STORED_COUPON_CODE}","discountType":"percentage","discountValue":45,"minOrderAmount":45,"maxDiscountAmount":45,"usageLimit":45,"isActive":true,"validFrom":"2026-01-26T10:25:03.863+00:00","validUntil":"2026-11-29T19:00:00.000Z"}'
    Then the response status should be 200
    # And the response should have field "data"
