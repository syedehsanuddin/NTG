@getClasReport

Feature: Get Clas Report
  Validate GET /api/v1/reports/class/{classSectionId} endpoint

  Scenario: GET Get Clas Report returns successful response
    When I send a GET request to endpoint "getClasReport" with id "{STORED_CLAS_ID}"
    Then the response status should be 200
