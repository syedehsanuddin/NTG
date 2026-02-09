@putUpdateOrderItemStatus

Feature: Update individual order item status (kitchen display only)
  Validate PUT /api/v1/orders/{orderId}/items/{itemId}/status endpoint

  Scenario: PUT Update individual order item status (kitchen display only) returns successful response
    When I send a PUT request to endpoint "putUpdateOrderItemStatus" with payload "{}"
    Then the response status should be 200
    And the response should have field "data"
