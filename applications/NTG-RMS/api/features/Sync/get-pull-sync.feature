@getPullSync

Feature: Pull latest changes from server
  Validate GET /api/v1/sync/pull endpoint

  Scenario: GET Pull latest changes from server returns successful response
    When I send a GET request to endpoint "getPullSync"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
