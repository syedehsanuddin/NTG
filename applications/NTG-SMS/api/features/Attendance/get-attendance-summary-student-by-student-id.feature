@getSummaryStudentAttendance

Feature: Get Summary Student Attendance
  Validate GET /api/v1/attendance/summary/student/{studentId} endpoint

  Scenario: GET Get Summary Student Attendance returns successful response
    When I send a GET request to endpoint "getSummaryStudentAttendance" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
