@putCancelLeaveRequest

Feature: Put Cancel Leave Request
  Validate PUT /api/v1/leave-requests/{id}/cancel endpoint

  Scenario: PUT Put Cancel Leave Request returns successful response
    When I send a PUT request to endpoint "putCancelLeaveRequest" with id "{STORED_CANCEL_ID}" and payload '"string"'
    Then the response status should be 200
