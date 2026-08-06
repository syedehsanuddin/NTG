@getClasDateAttendance

Feature: Get Clas Date Attendance
  Validate GET /api/v1/attendance/class/{classSectionId}/date/{date} endpoint

  Scenario: GET Get Clas Date Attendance returns successful response
    When I send a GET request to endpoint "getClasDateAttendance" with id "{STORED_DATE_ID}"
    Then the response status should be 200
