@postValidateCoupon

Feature: Validate coupon code
  Validate POST /api/v1/coupons/validate endpoint


  Scenario: POST Create a new coupon returns successful response
    When I send a POST request to endpoint "postCreateCoupon" with payload '{"code":"AUTOMATETEDTEST","discountType":"fixed","discountValue":2,"minOrderAmount":3,"usageLimit":2,"isActive":true,"validFrom":"2026-01-26T10:25:03.863Z"}' and headers 'branchId={BRANCH_ID}'
    Then the response status should be 201
    And I store the response id as coupon id

  Scenario: POST Validate coupon code returns successful response
    When I send a POST request to endpoint "postValidateCoupon" with payload '{"code":"{STORED_COUPON_CODE}","subtotal":5000}' and headers 'branchId={BRANCH_ID}'
    Then the response status should be 201
    # And the response should have field "data"
