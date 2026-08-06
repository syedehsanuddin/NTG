@putRejectLeaveRequest

Feature: Put Reject Leave Request
  Validate PUT /api/v1/leave-requests/{id}/reject endpoint

  Scenario: PUT Put Reject Leave Request returns successful response
    When I send a PUT request to endpoint "putRejectLeaveRequest" with id "{STORED_REJECT_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
