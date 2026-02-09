@putUpdateComboMeal

Feature: Update combo meal
  Validate PUT /api/v1/menu/combo-meals/{id} endpoint

  Scenario: PUT Update combo meal returns successful response
    When I send a PUT request to endpoint "putUpdateComboMeal" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
