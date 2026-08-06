@getCheckConflictEarlyDeparture

Feature: Get Check Conflict Early Departure
  Validate GET /api/v1/early-departures/check-conflict endpoint

  Scenario: GET Get Check Conflict Early Departure returns successful response
    When I send a GET request to endpoint "getCheckConflictEarlyDeparture"
    Then the response status should be 200
