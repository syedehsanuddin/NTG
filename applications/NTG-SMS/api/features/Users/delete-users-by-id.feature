@deleteUser

Feature: Delete User
  Validate DELETE /api/v1/users/{id} endpoint

  Scenario: POST Create a new user returns successful response
    When I send a POST request to endpoint "postCreateUser" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as user id

  Scenario: DELETE Delete User returns successful response
    When I send a DELETE request to endpoint "deleteUser" with id "{STORED_USER_ID}"
    Then the response status should be 200
