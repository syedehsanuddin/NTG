@getTaxReport

Feature: Get tax report (13.6)
  Validate GET /api/v1/reports/tax endpoint

  Scenario: GET Get tax report (13.6) returns successful response
    When I send a GET request to endpoint "getTaxReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
