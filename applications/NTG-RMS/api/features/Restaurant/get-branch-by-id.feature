@getBranchById

Feature: Get a single branch by ID
  Validate GET /api/v1/restaurant/branches/{id} endpoint

  Scenario: GET Get a single branch by ID returns successful response
    When I send a GET request to endpoint "getBranchById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
