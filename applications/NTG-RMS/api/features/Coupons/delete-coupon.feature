@deleteCoupon @happyFlow

Feature: Delete coupon (soft delete)
  Validate DELETE /api/v1/coupons/{id} endpoint


  Scenario: POST Create a new coupon returns successful response
    When I send a POST request to endpoint "postCreateCoupon" with payload '{"code":"AUTOMATETEDTEST","discountType":"fixed","discountValue":2,"minOrderAmount":3,"usageLimit":2,"isActive":true,"validFrom":"2026-01-26T10:25:03.863Z"}' and headers 'branchId={BRANCH_ID}'
    Then the response status should be 201
    And I store the response id as coupon id

    
  Scenario: DELETE Delete coupon (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteCoupon" with id "{STORED_COUPON_ID}"
    Then the response status should be 200
