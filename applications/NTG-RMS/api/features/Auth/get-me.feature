@AuthgetMe

Feature: Get current user profile
  Validate GET /api/v1/auth/me endpoint

  Scenario: GET Get current user profile returns successful response with required fields
    When I send a GET request to endpoint "getMe"
    Then the response status should be 200
    And the response should have field "id"
    And the response should have field "email"
    And the response should have field "name"
    And the response should have field "role"
    And the response should have field "roles"

  Scenario: GET Get current user profile returns valid data types
    When I send a GET request to endpoint "getMe"
    Then the response status should be 200
    And the response should have field "id" of type "string"
    And the response should have field "email" of type "string"
    And the response should have field "name" of type "string"
    And the response should have field "role" of type "string"
    And the response should have field "roles" of type "array"

  Scenario: GET Get current user profile returns valid roles array structure
    When I send a GET request to endpoint "getMe"
    Then the response status should be 200
    And the response should have field "roles"
    And the response field "roles" should be an array
    And the response field "roles" array should contain at least 1 item
    And all items in the response field "roles" should have required fields: "id, name"

  Scenario: GET Get current user profile returns valid email format
    When I send a GET request to endpoint "getMe"
    Then the response status should be 200
    And the response should have field "email"
    And the response should have field "email" of type "string"

  Scenario: GET Get current user profile returns correct content type
    When I send a GET request to endpoint "getMe"
    Then the response status should be 200
    And the response content type should be "application/json"
