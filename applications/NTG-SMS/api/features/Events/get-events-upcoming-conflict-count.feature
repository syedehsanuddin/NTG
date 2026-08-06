@getUpcomingConflictCountEvent

Feature: Get Upcoming Conflict Count Event
  Validate GET /api/v1/events/upcoming-conflict-count endpoint

  Scenario: GET Get Upcoming Conflict Count Event returns successful response
    When I send a GET request to endpoint "getUpcomingConflictCountEvent"
    Then the response status should be 200
