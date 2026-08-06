@postValidateAuth

Feature: Post Validate Auth
  Validate POST /api/v1/auth/validate endpoint

  Scenario: POST Post Validate Auth returns successful response
    When I send a POST request to endpoint "postValidateAuth" with payload '"string"'
    Then the response status should be 201
