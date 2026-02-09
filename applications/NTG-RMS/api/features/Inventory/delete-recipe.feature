@deleteRecipe

Feature: Delete recipe for a food item
  Validate DELETE /api/v1/inventory/recipes/food-item/{foodItemId} endpoint

  Scenario: DELETE Delete recipe for a food item returns successful response
    When I send a DELETE request to endpoint "deleteRecipe" with id "test-id"
    Then the response status should be 200
