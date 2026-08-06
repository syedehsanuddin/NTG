@postGenerateTimetable

Feature: Post Generate Timetable
  Validate POST /api/v1/timetable/generate endpoint

  Scenario: POST Post Generate Timetable returns successful response
    When I send a POST request to endpoint "postGenerateTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
