@getCouponById

Feature: Get coupon by ID
  Validate GET /api/v1/coupons/{id} endpoint


  Scenario: POST Create a new coupon returns successful response
    When I send a POST request to endpoint "postCreateCoupon" with payload '{"code":"AUTOMATETEDTEST","discountType":"fixed","discountValue":2,"minOrderAmount":3,"usageLimit":2,"isActive":true,"validFrom":"2026-01-26T10:25:03.863Z"}' and headers 'branchId=bcf7f7a6-f6a2-474a-8bb9-2ccf10a26191'
    Then the response status should be 201
    And I store the response id as coupon id


  Scenario: GET Get coupon by ID returns successful response
    When I send a GET request to endpoint "getCouponById" with id "{STORED_COUPON_ID}"
    Then the response status should be 200
    # And the response should have field "data"
