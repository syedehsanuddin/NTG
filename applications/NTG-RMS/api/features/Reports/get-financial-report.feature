@getFinancialReport

Feature: Get financial report (13.5)
  Validate GET /api/v1/reports/financial endpoint

  Scenario: GET Get financial report (13.5) returns successful response
    When I send a GET request to endpoint "getFinancialReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
