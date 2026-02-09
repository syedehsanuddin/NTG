@getIngredientById

Feature: Get ingredient by ID
  Validate GET /api/v1/inventory/ingredients/{id} endpoint

  Scenario: GET Get ingredient by ID returns successful response
    When I send a GET request to endpoint "getIngredientById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
