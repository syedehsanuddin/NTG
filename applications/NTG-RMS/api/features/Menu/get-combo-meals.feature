@getComboMeals

Feature: Get all combo meals
  Validate GET /api/v1/menu/combo-meals endpoint

  Scenario: GET Get all combo meals returns successful response
    When I send a GET request to endpoint "getComboMeals"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
