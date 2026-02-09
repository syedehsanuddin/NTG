@deleteComboMeal

Feature: Delete combo meal (soft delete)
  Validate DELETE /api/v1/menu/combo-meals/{id} endpoint

  Scenario: DELETE Delete combo meal (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteComboMeal" with id "test-id"
    Then the response status should be 200
