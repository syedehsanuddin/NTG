@getRecipes

Feature: Get all recipes
  Validate GET /api/v1/inventory/recipes endpoint

  Scenario: GET Get all recipes returns successful response
    When I send a GET request to endpoint "getRecipes"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
