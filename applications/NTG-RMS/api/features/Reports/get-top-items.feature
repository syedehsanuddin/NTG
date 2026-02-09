@getTopItems

Feature: Get top selling items
  Validate GET /api/v1/reports/top-items endpoint

  Scenario: GET Get top selling items returns successful response
    When I send a GET request to endpoint "getTopItems"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
