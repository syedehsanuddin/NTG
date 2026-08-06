@getBreakdownStorage

Feature: Get Breakdown Storage
  Validate GET /api/v1/storage/breakdown endpoint

  Scenario: GET Get Breakdown Storage returns successful response
    When I send a GET request to endpoint "getBreakdownStorage"
    Then the response status should be 200
