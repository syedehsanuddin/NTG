@getBatchTimetable

Feature: Get Batch Timetable
  Validate GET /api/v1/timetable/batch endpoint

  Scenario: GET Get Batch Timetable returns successful response
    When I send a GET request to endpoint "getBatchTimetable"
    Then the response status should be 200
