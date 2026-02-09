@deleteVariationGroup

Feature: Delete variation group (soft delete)
  Validate DELETE /api/v1/menu/variation-groups/{id} endpoint

  Scenario: DELETE Delete variation group (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteVariationGroup" with id "test-id"
    Then the response status should be 200
