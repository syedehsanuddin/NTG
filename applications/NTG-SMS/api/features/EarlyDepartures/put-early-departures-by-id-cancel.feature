@putCancelEarlyDeparture

Feature: Put Cancel Early Departure
  Validate PUT /api/v1/early-departures/{id}/cancel endpoint

  Scenario: PUT Put Cancel Early Departure returns successful response
    When I send a PUT request to endpoint "putCancelEarlyDeparture" with id "{STORED_CANCEL_ID}" and payload '"string"'
    Then the response status should be 200
