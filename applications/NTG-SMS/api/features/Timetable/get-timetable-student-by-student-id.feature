@getStudentTimetable

Feature: Get Student Timetable
  Validate GET /api/v1/timetable/student/{studentId} endpoint

  Scenario: GET Get Student Timetable returns successful response
    When I send a GET request to endpoint "getStudentTimetable" with id "{STORED_STUDENT_ID}"
    Then the response status should be 200
