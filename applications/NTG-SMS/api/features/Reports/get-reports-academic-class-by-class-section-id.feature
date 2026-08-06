@getAcademicClasReport

Feature: Get Academic Clas Report
  Validate GET /api/v1/reports/academic/class/{classSectionId} endpoint

  Scenario: GET Get Academic Clas Report returns successful response
    When I send a GET request to endpoint "getAcademicClasReport" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
