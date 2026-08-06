@postCreateUser

Feature: Post Create User
  Validate POST /api/v1/users endpoint

  Scenario: POST Post Create User returns successful response
    When I send a POST request to endpoint "postCreateUser" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
