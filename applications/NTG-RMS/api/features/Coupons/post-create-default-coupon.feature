# @postCreateDefaultCoupon

# Feature: Create default coupon code "5" with value 5 based on the tenant's default currency
#   Validate POST /api/v1/coupons/create-default endpoint

#   Scenario: POST Create default coupon code "5" with value 5 based on the tenant's default currency returns successful response
#     When I send a POST request to endpoint "postCreateDefaultCoupon" with payload "{}"
#     Then the response status should be 201
#     And the response should have field "data"
