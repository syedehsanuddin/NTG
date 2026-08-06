@getGoogleAuth

Feature: Get Google Auth
  Validate GET /api/v1/auth/google endpoint

  Scenario: GET Get Google Auth returns successful response
    When I send a GET request to endpoint "getGoogleAuth"
    Then the response status should be 200
