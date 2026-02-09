@getOrders

Feature: Get all orders with filters
  Validate GET /api/v1/orders endpoint

  Scenario: GET Get all orders with filters returns successful response
    When I send a GET request to endpoint "getOrders"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
