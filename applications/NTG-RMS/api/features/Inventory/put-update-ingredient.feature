@putUpdateIngredient

Feature: Update an ingredient
  Validate PUT /api/v1/inventory/ingredients/{id} endpoint

  Scenario: PUT Update an ingredient returns successful response
    When I send a PUT request to endpoint "putUpdateIngredient" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
