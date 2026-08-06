@getConflictEvent

Feature: Get Conflict Event
  Validate GET /api/v1/events/conflicts endpoint

  Scenario: GET Get Conflict Event returns successful response
    When I send a GET request to endpoint "getConflictEvent"
    Then the response status should be 200
