@putRoleUser

Feature: Put Role User
  Validate PUT /api/v1/users/{id}/roles endpoint

  Scenario: PUT Put Role User returns successful response
    When I send a PUT request to endpoint "putRoleUser" with id "{STORED_ROLE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
