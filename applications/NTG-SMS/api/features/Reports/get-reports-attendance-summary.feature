@getAttendanceSummaryReport

Feature: Get Attendance Summary Report
  Validate GET /api/v1/reports/attendance/summary endpoint

  Scenario: GET Get Attendance Summary Report returns successful response
    When I send a GET request to endpoint "getAttendanceSummaryReport"
    Then the response status should be 200
