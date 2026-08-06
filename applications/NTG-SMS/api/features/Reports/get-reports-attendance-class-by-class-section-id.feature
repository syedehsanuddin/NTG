@getAttendanceClasReport

Feature: Get Attendance Clas Report
  Validate GET /api/v1/reports/attendance/class/{classSectionId} endpoint

  Scenario: GET Get Attendance Clas Report returns successful response
    When I send a GET request to endpoint "getAttendanceClasReport" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
