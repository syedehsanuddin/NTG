@putUpdateFoodItem

Feature: Update food item
  Validate PUT /api/v1/menu/food-items/{id} endpoint

  Scenario: PUT Update food item returns successful response
    When I send a PUT request to endpoint "putUpdateFoodItem" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
