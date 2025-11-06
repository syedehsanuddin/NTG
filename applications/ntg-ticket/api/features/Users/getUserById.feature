@getUserById

Feature: Get User By ID API Validation
  Validate GET /api/v1/users/{id} endpoint

  Scenario: GET User by ID returns successful response with required fields
    When I send a GET request to endpoint "getUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    Then the response status should be 200
    And the response should have field "data"
    And the response should have field "message"
    And the response data should have field "id"
    And the response data should have field "email"
    And the response data should have field "name"
    And the response data should have field "roles"
    And the response data should have field "isActive"

  Scenario: GET User by ID returns correct user data
    When I send a GET request to endpoint "getUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    Then the response status should be 200
    And the response content type should be "application/json"
    And the response data should have field "id" equal to "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    And the response data should have field "email" equal to "ahmed@company.com"
    And the response data should have field "name" equal to "Ahmed Hassan al-Masri"

  Scenario: GET User by ID returns valid roles array
    When I send a GET request to endpoint "getUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    Then the response status should be 200
    And the response data should have field "roles"
    And the response data field "roles" should be an array
    And the response data field "roles" should contain "END_USER"
    And the response data field "roles" should contain "SUPPORT_STAFF"

  Scenario: GET User by ID returns valid data types
    When I send a GET request to endpoint "getUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    Then the response status should be 200
    And the response data should have field "id" of type "string"
    And the response data should have field "email" of type "string"
    And the response data should have field "name" of type "string"
    And the response data should have field "isActive" of type "boolean"
    And the response data should have field "roles" of type "array"

  Scenario: GET User by ID returns valid timestamp fields
    When I send a GET request to endpoint "getUserById" with id "50711385-db9d-4f1f-a74e-680b7d2ba4db"
    Then the response status should be 200
    And the response data should have field "createdAt"
    And the response data should have field "updatedAt"
    And the response data field "createdAt" should be a valid ISO date string
    And the response data field "updatedAt" should be a valid ISO date string

