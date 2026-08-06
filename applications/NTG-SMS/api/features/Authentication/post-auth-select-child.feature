@postSelectChildAuth

Feature: Post Select Child Auth
  Validate POST /api/v1/auth/select-child endpoint

  Scenario: POST Post Select Child Auth returns successful response
    When I send a POST request to endpoint "postSelectChildAuth" with payload '"string"'
    Then the response status should be 201
