@getReportAttendance

Feature: Get Report Attendance
  Validate GET /api/v1/attendance/report endpoint

  Scenario: GET Get Report Attendance returns successful response
    When I send a GET request to endpoint "getReportAttendance"
    Then the response status should be 200
