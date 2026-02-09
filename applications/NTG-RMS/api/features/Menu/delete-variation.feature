@deleteVariation

Feature: Delete variation (soft delete)
  Validate DELETE /api/v1/menu/variation-groups/{variationGroupId}/variations/{id} endpoint

  Scenario: DELETE Delete variation (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteVariation" with id "test-id"
    Then the response status should be 200
