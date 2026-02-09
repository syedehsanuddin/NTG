@getInvoices

Feature: Get billing history (invoices)
  Validate GET /api/v1/subscription/invoices endpoint

  Scenario: GET Get billing history (invoices) returns successful response
    When I send a GET request to endpoint "getInvoices"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
