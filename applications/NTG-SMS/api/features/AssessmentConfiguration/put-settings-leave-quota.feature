@putLeaveQuotaSetting

Feature: Put Leave Quota Setting
  Validate PUT /api/v1/settings/leave-quota endpoint

  Scenario: PUT Put Leave Quota Setting returns successful response
    When I send a PUT request to endpoint "putLeaveQuotaSetting" with payload '"string"'
    Then the response status should be 200
