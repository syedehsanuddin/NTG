@getLeaveRequests

Feature: Get Leave Requests
  Validate GET /api/v1/leave-requests endpoint

  Scenario: GET Get Leave Requests returns successful response
    When I send a GET request to endpoint "getLeaveRequests"
    Then the response status should be 200
