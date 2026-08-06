@postReplicateFromSectionTimetable

Feature: Post Replicate From Section Timetable
  Validate POST /api/v1/timetable/replicate-from-section endpoint

  Scenario: POST Post Replicate From Section Timetable returns successful response
    When I send a POST request to endpoint "postReplicateFromSectionTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
