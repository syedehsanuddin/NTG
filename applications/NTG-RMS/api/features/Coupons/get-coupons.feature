@getCoupons

Feature: Get all coupons
  Validate GET /api/v1/coupons endpoint

  Scenario: GET Get all coupons returns successful response
    When I send a GET request to endpoint "getCoupons"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
