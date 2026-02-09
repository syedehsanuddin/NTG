@postCreateCounter

Feature: Create a new counter
  Validate POST /api/v1/restaurant/counters endpoint

  Scenario: POST Create a new counter returns successful response
    When I send a POST request to endpoint "postCreateCounter" with payload "{}"
    Then the response status should be 201
    And the response should have field "data"
