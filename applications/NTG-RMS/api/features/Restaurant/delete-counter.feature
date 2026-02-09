@deleteCounter

Feature: Delete a counter (soft delete)
  Validate DELETE /api/v1/restaurant/counters/{id} endpoint

  Scenario: DELETE Delete a counter (soft delete) returns successful response
    When I send a DELETE request to endpoint "deleteCounter" with id "test-id"
    Then the response status should be 200
