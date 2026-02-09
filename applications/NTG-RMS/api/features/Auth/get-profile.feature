@getProfile @ahsanme11

Feature: Get current user profile
  Validate GET /api/v1/auth/profile endpoint

  Scenario: GET Get current user profile returns successful response with required fields
    When I send a GET request to endpoint "getProfile"
    Then the response status should be 200
    And the response should have field "id"
    And the response should have field "email"
    And the response should have field "name"
    And the response should have field "role"
    And the response should have field "phone"
    And the response should have field "tenantId"
    And the response should have field "createdAt"
    And the response should have field "updatedAt"

  Scenario: GET Get current user profile returns valid data types
    When I send a GET request to endpoint "getProfile"
    Then the response status should be 200
    And the response should have field "id" of type "string"
    And the response should have field "email" of type "string"
    And the response should have field "name" of type "string"
    And the response should have field "role" of type "string"
    And the response should have field "phone" of type "string"
    And the response should have field "tenantId" of type "string"
    And the response should have field "createdAt" of type "string"
    And the response should have field "updatedAt" of type "string"

  Scenario: GET Get current user profile returns valid timestamp fields
    When I send a GET request to endpoint "getProfile"
    Then the response status should be 200
    And the response should have field "createdAt"
    And the response should have field "updatedAt"
    And the response field "createdAt" should be a valid ISO date string
    And the response field "updatedAt" should be a valid ISO date string

  Scenario: GET Get current user profile returns correct content type
    When I send a GET request to endpoint "getProfile"
    Then the response status should be 200
    And the response content type should be "application/json"
