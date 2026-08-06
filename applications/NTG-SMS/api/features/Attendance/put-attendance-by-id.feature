@putUpdateAttendance

Feature: Put Update Attendance
  Validate PUT /api/v1/attendance/{id} endpoint

  Scenario: PUT Put Update Attendance returns successful response
    When I send a PUT request to endpoint "putUpdateAttendance" with id "{STORED_ATTENDANCE_ID}" and payload '{"name":"Automated Test"}'
    Then the response status should be 200
