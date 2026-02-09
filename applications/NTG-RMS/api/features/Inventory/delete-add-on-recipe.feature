@deleteAddOnRecipe

Feature: Delete recipe for an add-on
  Validate DELETE /api/v1/inventory/recipes/add-on/{addOnId} endpoint

  Scenario: DELETE Delete recipe for an add-on returns successful response
    When I send a DELETE request to endpoint "deleteAddOnRecipe" with id "test-id"
    Then the response status should be 200
