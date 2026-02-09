@getTableById

Feature: Get a single table by ID
  Validate GET /api/v1/restaurant/tables/{id} endpoint

  Scenario: GET Get a single table by ID returns successful response
    When I send a GET request to endpoint "getTableById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
