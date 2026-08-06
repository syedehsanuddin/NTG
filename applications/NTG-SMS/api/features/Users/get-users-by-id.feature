@getUserById

Feature: Get User By Id
  Validate GET /api/v1/users/{id} endpoint

  Scenario: POST Create a new user returns successful response
    When I send a POST request to endpoint "postCreateUser" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
    And I store the response id as user id

  Scenario: GET Get User By Id returns successful response
    When I send a GET request to endpoint "getUserById" with id "{STORED_USER_ID}"
    Then the response status should be 200
