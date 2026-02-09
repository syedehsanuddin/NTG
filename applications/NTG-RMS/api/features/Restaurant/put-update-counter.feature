@putUpdateCounter

Feature: Update a counter
  Validate PUT /api/v1/restaurant/counters/{id} endpoint

  Scenario: PUT Update a counter returns successful response
    When I send a PUT request to endpoint "putUpdateCounter" with id "test-id" and payload "{}"
    Then the response status should be 200
    And the response should have field "data"
