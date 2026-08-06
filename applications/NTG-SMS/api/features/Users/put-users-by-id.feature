@putUpdateUser

Feature: Put Update User
  Validate PUT /api/v1/users/{id} endpoint

  Scenario: POST Create a new user returns successful response
    When I send a POST request to endpoint "postCreateUser" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as user id

  Scenario: PUT Put Update User returns successful response
    When I send a PUT request to endpoint "putUpdateUser" with id "{STORED_USER_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
