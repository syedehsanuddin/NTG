@getMeAuth

Feature: Get Me Auth
  Validate GET /api/v1/auth/me endpoint

  Scenario: GET Get Me Auth returns successful response
    When I send a GET request to endpoint "getMeAuth"
    Then the response status should be 200
