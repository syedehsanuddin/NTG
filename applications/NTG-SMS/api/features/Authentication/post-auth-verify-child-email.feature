@postVerifyChildEmailAuth

Feature: Post Verify Child Email Auth
  Validate POST /api/v1/auth/verify-child-email endpoint

  Scenario: POST Post Verify Child Email Auth returns successful response
    When I send a POST request to endpoint "postVerifyChildEmailAuth" with payload '"string"'
    Then the response status should be 201
