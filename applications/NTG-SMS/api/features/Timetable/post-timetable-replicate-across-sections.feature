@postReplicateAcrossSectionTimetable

Feature: Post Replicate Across Section Timetable
  Validate POST /api/v1/timetable/replicate-across-sections endpoint

  Scenario: POST Post Replicate Across Section Timetable returns successful response
    When I send a POST request to endpoint "postReplicateAcrossSectionTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
