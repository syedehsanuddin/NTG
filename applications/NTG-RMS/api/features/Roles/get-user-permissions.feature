@getUserPermissions

Feature: Get user permissions (aggregated from all roles)
  Validate GET /api/v1/roles/user/{userId}/permissions endpoint

  Scenario: GET Get user permissions (aggregated from all roles) returns successful response
    When I send a GET request to endpoint "getUserPermissions" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
