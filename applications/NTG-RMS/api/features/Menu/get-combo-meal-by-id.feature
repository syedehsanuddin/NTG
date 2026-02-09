@getComboMealById

Feature: Get combo meal by ID
  Validate GET /api/v1/menu/combo-meals/{id} endpoint

  Scenario: GET Get combo meal by ID returns successful response
    When I send a GET request to endpoint "getComboMealById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
