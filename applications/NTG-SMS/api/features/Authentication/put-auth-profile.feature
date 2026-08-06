@putProfileAuth

Feature: Put Profile Auth
  Validate PUT /api/v1/auth/profile endpoint

  Scenario: PUT Put Profile Auth returns successful response
    When I send a PUT request to endpoint "putProfileAuth" with payload '{"name":"Automated Test"}'
    Then the response status should be 200
