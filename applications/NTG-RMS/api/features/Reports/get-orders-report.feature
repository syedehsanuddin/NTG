@getOrdersReport

Feature: Get orders report (13.2)
  Validate GET /api/v1/reports/orders endpoint

  Scenario: GET Get orders report (13.2) returns successful response
    When I send a GET request to endpoint "getOrdersReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
