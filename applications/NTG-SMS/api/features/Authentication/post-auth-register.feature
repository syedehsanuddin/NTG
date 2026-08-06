@postRegisterAuth

Feature: Post Register Auth
  Validate POST /api/v1/auth/register endpoint

  Scenario: POST Post Register Auth returns successful response
    When I send a POST request to endpoint "postRegisterAuth" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
