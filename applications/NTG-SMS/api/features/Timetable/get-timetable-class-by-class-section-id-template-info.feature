@getClasTemplateInfoTimetable

Feature: Get Clas Template Info Timetable
  Validate GET /api/v1/timetable/class/{classSectionId}/template-info endpoint

  Scenario: GET Get Clas Template Info Timetable returns successful response
    When I send a GET request to endpoint "getClasTemplateInfoTimetable" with id "{STORED_TEMPLATEINFO_ID}"
    Then the response status should be 200
