@deleteCategory

Feature: Delete category (soft delete)
  Validate DELETE /api/v1/menu/categories/{id} endpoint

  Scenario: DELETE Delete category (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteCategory" with id "test-id"
    Then the response status should be 200
