@getSummaryClasAttendance

Feature: Get Summary Clas Attendance
  Validate GET /api/v1/attendance/summary/class/{classSectionId} endpoint

  Scenario: GET Get Summary Clas Attendance returns successful response
    When I send a GET request to endpoint "getSummaryClasAttendance" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
