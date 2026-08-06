@putApproveEarlyDeparture

Feature: Put Approve Early Departure
  Validate PUT /api/v1/early-departures/{id}/approve endpoint

  Scenario: PUT Put Approve Early Departure returns successful response
    When I send a PUT request to endpoint "putApproveEarlyDeparture" with id "{STORED_APPROVE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
