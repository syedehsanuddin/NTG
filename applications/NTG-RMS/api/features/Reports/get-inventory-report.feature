@getInventoryReport

Feature: Get inventory report (13.4)
  Validate GET /api/v1/reports/inventory endpoint

  Scenario: GET Get inventory report (13.4) returns successful response
    When I send a GET request to endpoint "getInventoryReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
