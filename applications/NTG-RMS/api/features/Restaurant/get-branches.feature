@getBranches

Feature: Get all branches for the restaurant
  Validate GET /api/v1/restaurant/branches endpoint

  Scenario: GET Get all branches for the restaurant returns successful response
    When I send a GET request to endpoint "getBranches"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
