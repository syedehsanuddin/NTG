@getConflictEventById

Feature: Get Conflict Event By Id
  Validate GET /api/v1/events/{id}/conflicts endpoint

  Scenario: GET Get Conflict Event By Id returns successful response
    When I send a GET request to endpoint "getConflictEventById" with id "{STORED_CONFLICT_ID}"
    Then the response status should be 200
