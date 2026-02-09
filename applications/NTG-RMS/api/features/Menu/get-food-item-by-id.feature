@getFoodItemById

Feature: Get food item by ID
  Validate GET /api/v1/menu/food-items/{id} endpoint

  Scenario: GET Get food item by ID returns successful response
    When I send a GET request to endpoint "getFoodItemById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
