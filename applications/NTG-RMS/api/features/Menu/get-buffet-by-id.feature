@getBuffetById

Feature: Get buffet by ID
  Validate GET /api/v1/menu/buffets/{id} endpoint

  Scenario: GET Get buffet by ID returns successful response
    When I send a GET request to endpoint "getBuffetById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
