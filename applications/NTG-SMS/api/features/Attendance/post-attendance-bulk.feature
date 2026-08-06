@postBulkAttendance

Feature: Post Bulk Attendance
  Validate POST /api/v1/attendance/bulk endpoint

  Scenario: POST Post Bulk Attendance returns successful response
    When I send a POST request to endpoint "postBulkAttendance" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
