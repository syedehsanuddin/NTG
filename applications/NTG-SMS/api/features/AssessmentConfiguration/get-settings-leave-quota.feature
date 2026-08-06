@getLeaveQuotaSetting

Feature: Get Leave Quota Setting
  Validate GET /api/v1/settings/leave-quota endpoint

  Scenario: GET Get Leave Quota Setting returns successful response
    When I send a GET request to endpoint "getLeaveQuotaSetting"
    Then the response status should be 200
