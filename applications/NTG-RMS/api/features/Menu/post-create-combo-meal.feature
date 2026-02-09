@postCreateComboMeal

Feature: Create a new combo meal
  Validate POST /api/v1/menu/combo-meals endpoint

  Scenario: POST Create a new combo meal returns successful response
    When I send a POST request to endpoint "postCreateComboMeal" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
