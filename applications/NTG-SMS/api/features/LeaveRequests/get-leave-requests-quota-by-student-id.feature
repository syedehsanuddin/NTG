@getQuotaLeaveRequest

Feature: Get Quota Leave Request
  Validate GET /api/v1/leave-requests/quota/{studentId} endpoint

  Scenario: GET Get Quota Leave Request returns successful response
    When I send a GET request to endpoint "getQuotaLeaveRequest" with id "{STORED_QUOTA_ID}"
    Then the response status should be 200
