@postLoginStatuPublic

Feature: Post Login Statu Public
  Validate POST /api/v1/public/login-status endpoint

  Scenario: POST Post Login Statu Public returns successful response
    When I send a POST request to endpoint "postLoginStatuPublic" with payload '"string"'
    Then the response status should be 201
