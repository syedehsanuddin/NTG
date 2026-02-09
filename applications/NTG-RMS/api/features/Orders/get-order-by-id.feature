@getOrderById

Feature: Get order by ID with full details
  Validate GET /api/v1/orders/{id} endpoint

  Scenario: GET Get order by ID with full details returns successful response
    When I send a GET request to endpoint "getOrderById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
