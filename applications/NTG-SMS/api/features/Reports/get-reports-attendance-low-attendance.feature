@getAttendanceLowAttendanceReport

Feature: Get Attendance Low Attendance Report
  Validate GET /api/v1/reports/attendance/low-attendance endpoint

  Scenario: GET Get Attendance Low Attendance Report returns successful response
    When I send a GET request to endpoint "getAttendanceLowAttendanceReport"
    Then the response status should be 200
