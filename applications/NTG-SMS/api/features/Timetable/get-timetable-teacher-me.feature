@getTeacherMeTimetable

Feature: Get Teacher Me Timetable
  Validate GET /api/v1/timetable/teacher/me endpoint

  Scenario: GET Get Teacher Me Timetable returns successful response
    When I send a GET request to endpoint "getTeacherMeTimetable"
    Then the response status should be 200
