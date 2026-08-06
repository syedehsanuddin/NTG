@getConflictTimetable

Feature: Get Conflict Timetable
  Validate GET /api/v1/timetable/conflicts endpoint

  Scenario: GET Get Conflict Timetable returns successful response
    When I send a GET request to endpoint "getConflictTimetable"
    Then the response status should be 200
