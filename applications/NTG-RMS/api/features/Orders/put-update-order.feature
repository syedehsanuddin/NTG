@putUpdateOrder

Feature: Update/modify an existing order (only if not paid)
  Validate PUT /api/v1/orders/{id} endpoint

  Scenario: PUT Update/modify an existing order (only if not paid) returns successful response
    When I send a PUT request to endpoint "putUpdateOrder" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
