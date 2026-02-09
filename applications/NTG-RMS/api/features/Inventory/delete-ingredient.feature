@deleteIngredient

Feature: Delete an ingredient (soft delete)
  Validate DELETE /api/v1/inventory/ingredients/{id} endpoint

  Scenario: DELETE Delete an ingredient (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteIngredient" with id "test-id"
    Then the response status should be 200
