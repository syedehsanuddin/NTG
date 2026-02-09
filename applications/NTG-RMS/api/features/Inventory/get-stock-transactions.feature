@getStockTransactions

Feature: Get stock transactions
  Validate GET /api/v1/inventory/stock/transactions endpoint

  Scenario: GET Get stock transactions returns successful response
    When I send a GET request to endpoint "getStockTransactions"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
