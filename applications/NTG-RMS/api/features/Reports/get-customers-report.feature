@getCustomersReport 

Feature: Get customers report (13.3)
  Validate GET /api/v1/reports/customers endpoint

  Scenario: GET Get customers report (13.3) returns successful response
    When I send a GET request to endpoint "getCustomersReport"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
