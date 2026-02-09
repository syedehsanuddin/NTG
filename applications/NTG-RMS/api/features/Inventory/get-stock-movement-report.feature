@getStockMovementReport

Feature: Get stock movement report
  Validate GET /api/v1/inventory/reports/stock-movement endpoint

  Scenario: GET Get stock movement report returns successful response
    When I send a GET request to endpoint "getStockMovementReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
