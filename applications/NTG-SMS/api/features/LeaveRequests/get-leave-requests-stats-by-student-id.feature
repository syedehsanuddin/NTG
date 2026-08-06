@getStatLeaveRequest

Feature: Get Stat Leave Request
  Validate GET /api/v1/leave-requests/stats/{studentId} endpoint

  Scenario: GET Get Stat Leave Request returns successful response
    When I send a GET request to endpoint "getStatLeaveRequest" with id "{STORED_STAT_ID}"
    Then the response status should be 200
