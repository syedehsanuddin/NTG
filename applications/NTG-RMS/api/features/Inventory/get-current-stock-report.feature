@getCurrentStockReport

Feature: Get current stock report
  Validate GET /api/v1/inventory/reports/current-stock endpoint

  Scenario: GET Get current stock report returns successful response
    When I send a GET request to endpoint "getCurrentStockReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
