@getFoodItems

Feature: Get all food items
  Validate GET /api/v1/menu/food-items endpoint

  Scenario: GET Get all food items returns successful response
    When I send a GET request to endpoint "getFoodItems"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
