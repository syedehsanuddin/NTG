@getCurrentChildAuth

Feature: Get Current Child Auth
  Validate GET /api/v1/auth/current-child endpoint

  Scenario: GET Get Current Child Auth returns successful response
    When I send a GET request to endpoint "getCurrentChildAuth"
    Then the response status should be 200
