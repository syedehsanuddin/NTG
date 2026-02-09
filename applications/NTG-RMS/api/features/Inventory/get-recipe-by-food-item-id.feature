@getRecipeByFoodItemId

Feature: Get recipe by food item ID
  Validate GET /api/v1/inventory/recipes/food-item/{foodItemId} endpoint

  Scenario: GET Get recipe by food item ID returns successful response
    When I send a GET request to endpoint "getRecipeByFoodItemId" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
