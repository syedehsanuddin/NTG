@getProfileAuth

Feature: Get Profile Auth
  Validate GET /api/v1/auth/profile endpoint

  Scenario: GET Get Profile Auth returns successful response
    When I send a GET request to endpoint "getProfileAuth"
    Then the response status should be 200
