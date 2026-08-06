@getStudentAttendance

Feature: Get Student Attendance
  Validate GET /api/v1/attendance/student/{studentId} endpoint

  Scenario: GET Get Student Attendance returns successful response
    When I send a GET request to endpoint "getStudentAttendance" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
