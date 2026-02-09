@getLowStockAlerts

Feature: Get low stock alerts
  Validate GET /api/v1/inventory/reports/low-stock-alerts endpoint

  Scenario: GET Get low stock alerts returns successful response
    When I send a GET request to endpoint "getLowStockAlerts"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
