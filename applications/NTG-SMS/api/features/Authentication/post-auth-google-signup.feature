@postGoogleSignupAuth

Feature: Post Google Signup Auth
  Validate POST /api/v1/auth/google-signup endpoint

  Scenario: POST Post Google Signup Auth returns successful response
    When I send a POST request to endpoint "postGoogleSignupAuth" with payload '"string"'
    Then the response status should be 201
