@deleteOrder

Feature: Delete order (soft delete)
  Validate DELETE /api/v1/orders/{id} endpoint

  Scenario: DELETE Delete order (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteOrder" with id "test-id"
    Then the response status should be 200
