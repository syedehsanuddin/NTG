@getTeacherTimetable

Feature: Get Teacher Timetable
  Validate GET /api/v1/timetable/teacher/{staffId} endpoint

  Scenario: GET Get Teacher Timetable returns successful response
    When I send a GET request to endpoint "getTeacherTimetable" with id "{STORED_TEACHER_ID}"
    Then the response status should be 200
