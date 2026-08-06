@getAttendanceExportReport

Feature: Get Attendance Export Report
  Validate GET /api/v1/reports/attendance/export endpoint

  Scenario: GET Get Attendance Export Report returns successful response
    When I send a GET request to endpoint "getAttendanceExportReport"
    Then the response status should be 200
