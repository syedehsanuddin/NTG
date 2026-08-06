@postBootstrapGoogleAuth

Feature: Post Bootstrap Google Auth
  Validate POST /api/v1/auth/bootstrap-google endpoint

  Scenario: POST Post Bootstrap Google Auth returns successful response
    When I send a POST request to endpoint "postBootstrapGoogleAuth" with payload '"string"'
    Then the response status should be 201
