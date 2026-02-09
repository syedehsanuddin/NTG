@putUpdateOrderStatus

Feature: Update order status
  Validate PUT /api/v1/orders/{id}/status endpoint

  Scenario: PUT Update order status returns successful response
    When I send a PUT request to endpoint "putUpdateOrderStatus" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
