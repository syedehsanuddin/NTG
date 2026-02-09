@deleteBranch

Feature: Delete a branch (soft delete)
  Validate DELETE /api/v1/restaurant/branches/{id} endpoint

  Scenario: DELETE Delete a branch (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteBranch" with id "test-id"
    Then the response status should be 200
