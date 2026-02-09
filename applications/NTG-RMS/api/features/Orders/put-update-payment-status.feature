@putUpdatePaymentStatus

Feature: Update order payment status
  Validate PUT /api/v1/orders/{id}/payment endpoint

  Scenario: PUT Update order payment status returns successful response
    When I send a PUT request to endpoint "putUpdatePaymentStatus" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
