@postCreateFoodItem

Feature: Create a new food item
  Validate POST /api/v1/menu/food-items endpoint

  Scenario: POST Create a new food item returns successful response
    When I send a POST request to endpoint "postCreateFoodItem" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
