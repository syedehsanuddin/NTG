@getUserRoles

Feature: Get user roles
  Validate GET /api/v1/roles/user/{userId} endpoint

  Scenario: GET Get user roles returns successful response
    When I send a GET request to endpoint "getUserRoles" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
