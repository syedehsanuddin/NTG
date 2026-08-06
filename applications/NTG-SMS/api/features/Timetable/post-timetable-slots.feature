@postSlotTimetable

Feature: Post Slot Timetable
  Validate POST /api/v1/timetable/slots endpoint

  Scenario: POST Post Slot Timetable returns successful response
    When I send a POST request to endpoint "postSlotTimetable" with payload '{"name":"Automated Test"}'
    Then the response status should be 201
