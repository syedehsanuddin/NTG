@postSwitchChildAuth

Feature: Post Switch Child Auth
  Validate POST /api/v1/auth/switch-child endpoint

  Scenario: POST Post Switch Child Auth returns successful response
    When I send a POST request to endpoint "postSwitchChildAuth" with payload '"string"'
    Then the response status should be 201
