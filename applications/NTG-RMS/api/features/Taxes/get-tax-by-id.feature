@getTaxById

Feature: Get a tax by ID
  Validate GET /api/v1/taxes/{id} endpoint

  Scenario: GET Get a tax by ID returns successful response
    When I send a GET request to endpoint "getTaxById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
