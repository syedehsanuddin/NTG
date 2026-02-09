@getRoleById

Feature: Get role by ID with permissions
  Validate GET /api/v1/roles/{id} endpoint

  Scenario: GET Get role by ID with permissions returns successful response
    When I send a GET request to endpoint "getRoleById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
