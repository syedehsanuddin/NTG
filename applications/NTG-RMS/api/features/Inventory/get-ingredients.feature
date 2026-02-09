@getIngredients

Feature: Get all ingredients
  Validate GET /api/v1/inventory/ingredients endpoint

  Scenario: GET Get all ingredients returns successful response
    When I send a GET request to endpoint "getIngredients"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
