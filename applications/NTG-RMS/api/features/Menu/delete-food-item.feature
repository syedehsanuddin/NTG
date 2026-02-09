@deleteFoodItem

Feature: Delete food item (soft delete)
  Validate DELETE /api/v1/menu/food-items/{id} endpoint

  Scenario: DELETE Delete food item (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteFoodItem" with id "test-id"
    Then the response status should be 200
