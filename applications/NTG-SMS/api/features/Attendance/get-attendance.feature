@getAttendance

Feature: Get Attendance
  Validate GET /api/v1/attendance endpoint

  Scenario: GET Get Attendance returns successful response
    When I send a GET request to endpoint "getAttendance"
    Then the response status should be 200
