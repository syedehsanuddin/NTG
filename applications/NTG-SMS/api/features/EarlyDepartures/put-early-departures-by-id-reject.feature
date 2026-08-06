@putRejectEarlyDeparture

Feature: Put Reject Early Departure
  Validate PUT /api/v1/early-departures/{id}/reject endpoint

  Scenario: PUT Put Reject Early Departure returns successful response
    When I send a PUT request to endpoint "putRejectEarlyDeparture" with id "{STORED_REJECT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
