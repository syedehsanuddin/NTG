@getCounterById

Feature: Get a single counter by ID
  Validate GET /api/v1/restaurant/counters/{id} endpoint

  Scenario: GET Get a single counter by ID returns successful response
    When I send a GET request to endpoint "getCounterById" with id "test-id"
    Then the response status should be 200
    And the response should have field "data"
