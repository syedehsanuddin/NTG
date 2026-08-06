@putApproveLeaveRequest

Feature: Put Approve Leave Request
  Validate PUT /api/v1/leave-requests/{id}/approve endpoint

  Scenario: PUT Put Approve Leave Request returns successful response
    When I send a PUT request to endpoint "putApproveLeaveRequest" with id "{STORED_APPROVE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
