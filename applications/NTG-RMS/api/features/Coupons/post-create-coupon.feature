@postCreateCoupon

Feature: Create a new coupon
  Validate POST /api/v1/coupons endpoint

  Scenario: POST Create a new coupon returns successful response
    When I send a POST request to endpoint "postCreateCoupon" with payload '{"code":"AUTOMATETEDTEST","discountType":"fixed","discountValue":2,"minOrderAmount":3,"usageLimit":2,"isActive":true,"validFrom":"2026-01-26T10:25:03.863Z"}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'
    Then the response status should be 201
    # And the response should have field "data"
