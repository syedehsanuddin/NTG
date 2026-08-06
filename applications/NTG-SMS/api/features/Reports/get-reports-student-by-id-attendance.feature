@getStudentAttendanceReportById

Feature: Get Student Attendance Report By Id
  Validate GET /api/v1/reports/student/{id}/attendance endpoint

  Scenario: GET Get Student Attendance Report By Id returns successful response
    When I send a GET request to endpoint "getStudentAttendanceReportById" with id "{STORED_ATTENDANCE_ID}"
    Then the response status should be 200
