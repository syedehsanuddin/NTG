@deleteTable

Feature: Delete a table (soft delete)
  Validate DELETE /api/v1/restaurant/tables/{id} endpoint

  Scenario: DELETE Delete a table (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteTable" with id "test-id"
    Then the response status should be 200
