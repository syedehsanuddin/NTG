@getAvailableTables

Feature: Get available tables (tables without active orders) for dine-in
  Validate GET /api/v1/restaurant/tables/available endpoint

  Scenario: GET Get available tables (tables without active orders) for dine-in returns successful response
    When I send a GET request to endpoint "getAvailableTables"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
