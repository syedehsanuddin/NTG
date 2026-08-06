@getScheduleStaffById

Feature: Get Schedule Staff By Id
  Validate GET /api/v1/staff/{id}/schedule endpoint

  Scenario: GET Get Schedule Staff By Id returns successful response
    When I send a GET request to endpoint "getScheduleStaffById" with id "{STORED_SCHEDULE_ID}"
    Then the response status should be 200
