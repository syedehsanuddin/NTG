@getClasTimetable

Feature: Get Clas Timetable
  Validate GET /api/v1/timetable/class/{classSectionId} endpoint

  Scenario: GET Get Clas Timetable returns successful response
    When I send a GET request to endpoint "getClasTimetable" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
