@getSettings

Feature: Get all settings
  Validate GET /api/v1/settings endpoint

  Scenario: GET Get all settings returns successful response
    When I send a GET request to endpoint "getSettings"
    Then the response status should be 200
    And the response should be a valid JSON array
    And the response array should contain at least 1 item
