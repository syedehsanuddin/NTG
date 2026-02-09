@getCategoryById

Feature: Get category by ID
  Validate GET /api/v1/menu/categories/{id} endpoint

  Scenario: GET Get category by ID returns successful response
    When I send a GET request to endpoint "getCategoryById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
