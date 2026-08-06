@getValidateTimetable

Feature: Get Validate Timetable
  Validate GET /api/v1/timetable/validate endpoint

  Scenario: GET Get Validate Timetable returns successful response
    When I send a GET request to endpoint "getValidateTimetable"
    Then the response status should be 200
