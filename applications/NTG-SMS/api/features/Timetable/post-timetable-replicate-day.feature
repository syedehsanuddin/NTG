@postReplicateDayTimetable

Feature: Post Replicate Day Timetable
  Validate POST /api/v1/timetable/replicate-day endpoint

  Scenario: POST Post Replicate Day Timetable returns successful response
    When I send a POST request to endpoint "postReplicateDayTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
