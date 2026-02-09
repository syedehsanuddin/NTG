@putUpdateDeliveryStatus

Feature: Update delivery status
  Validate PUT /api/v1/delivery/orders/{id}/status endpoint

  Scenario: PUT Update delivery status returns successful response
    When I send a PUT request to endpoint "putUpdateDeliveryStatus" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
