@getAssignedBranches

Feature: Get user assigned branches
  Validate GET /api/v1/auth/assigned-branches endpoint

  Scenario: GET Get user assigned branches returns successful response
    When I send a GET request to endpoint "getAssignedBranches"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
