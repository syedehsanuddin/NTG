@getUsage

Feature: Get subscription usage metrics
  Validate GET /api/v1/subscription/usage endpoint

  Scenario: GET Get subscription usage metrics returns successful response
    When I send a GET request to endpoint "getUsage"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
