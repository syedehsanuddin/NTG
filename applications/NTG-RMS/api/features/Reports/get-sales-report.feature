@getSalesReport

Feature: Get sales report (13.1)
  Validate GET /api/v1/reports/sales endpoint

  Scenario: GET Get sales report (13.1) returns successful response
    When I send a GET request to endpoint "getSalesReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
