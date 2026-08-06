@getSettings

Feature: Get Settings
  Validate GET /api/v1/settings endpoint

  Scenario: GET Get Settings returns successful response
    When I send a GET request to endpoint "getSettings"
    Then the response status should be 200
