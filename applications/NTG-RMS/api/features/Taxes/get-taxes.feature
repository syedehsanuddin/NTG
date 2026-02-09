@getTaxes

Feature: Get all taxes
  Validate GET /api/v1/taxes endpoint

  Scenario: GET Get all taxes returns successful response
    When I send a GET request to endpoint "getTaxes"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
