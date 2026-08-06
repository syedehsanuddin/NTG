@postRequestPasswordResetPublic

Feature: Post Request Password Reset Public
  Validate POST /api/v1/public/request-password-reset endpoint

  Scenario: POST Post Request Password Reset Public returns successful response
    When I send a POST request to endpoint "postRequestPasswordResetPublic" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
